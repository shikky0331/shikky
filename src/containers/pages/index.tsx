import { VFC } from 'react';
import Blog from 'components/templates/Blog';
import Seo from 'components/templates/Seo';
import articles from './articles.json';

const Pages: VFC = () => (
  <>
    <Seo />
    <Blog articles={articles} />
  </>
);

export default Pages;
