import ReactMarkdown from 'react-markdown';
import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type ParamTypes = {
  date: string
}

const Blog = (): ReactElement => {
  const [markdown, setMarkdown] = useState('');
  const { date } = useParams<ParamTypes>();

  useEffect(() => {
    const markdownPath = import(`./markdowns/${date}.md`);
    markdownPath
      .then((path) => {
        fetch(path.default)
          .then((response) => response.text())
          .then((text) => setMarkdown(text));
      });
  }, []);

  return (
    <ReactMarkdown>{markdown}</ReactMarkdown>
  );
};

export default Blog;
