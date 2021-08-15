import ReactMarkdown from 'react-markdown';
import { useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';

type ParamTypes = {
  date: string
}

const Blog: VFC = () => {
  const [markdown, setMarkdown] = useState('');
  const { date } = useParams<ParamTypes>();

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
    <ReactMarkdown>{markdown}</ReactMarkdown>
  );
};

export default Blog;
