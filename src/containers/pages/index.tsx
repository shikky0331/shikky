import { VFC } from 'react';
import Blog from 'components/templates/Blog';
import articles from './articles.json';

const Pages: VFC = () => (
  <Blog articles={articles} />
);

export default Pages;
