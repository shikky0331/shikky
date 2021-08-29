import { VFC } from 'react';
import Blog from 'components/templates/Blog';
import Seo from 'components/templates/Seo';
import articles from './articles.json';

const Pages: VFC = () => (
  <>
    <Seo ogType="website" />
    <Blog articles={articles} />
  </>
);

export default Pages;
