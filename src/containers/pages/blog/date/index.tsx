import ReactMarkdown from 'react-markdown';
import { useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';
import articles from 'containers/pages/articles.json';
import Seo from 'components/templates/Seo';

type ParamTypes = {
  date: string
}

const Blog: VFC = () => {
  const [markdown, setMarkdown] = useState('');
  const { date } = useParams<ParamTypes>();
  const articleInfo = articles.find((article) => article.url.includes(date));

  useEffect(() => {
    const fetchMarkdownData = async () => {
      try {
        const markdownFile = await import(`../markdowns/${date}.md`);
        const response = await fetch(markdownFile.default);

        setMarkdown(await response.text());
      } catch (error) {
        setMarkdown('# Not found a article.');
      }
    };

    fetchMarkdownData();
  }, []);

  return (
    <>
      <Seo
        title={articleInfo?.title}
        description={articleInfo?.introduction}
        url={`shikky${articleInfo?.url}`}
        ogType="article"
        ogTitle={articleInfo?.title}
        ogDescription={articleInfo?.introduction}
      />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
};

export default Blog;
