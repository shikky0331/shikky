import Header from 'components/organisms/Header';
import { VFC } from 'react';
import ArticleList from 'components/organisms/ArticleList';
import Footer from 'components/organisms/Footer';
import { ArticleProps } from 'components/molecules/Article';
import styles from './style.module.scss';

export interface BlogProps {
  articles: ArticleProps[];
}

const Blog: VFC<BlogProps> = ({
  articles,
}) => (
  <>
    <Header />
    <main className={styles.main}>
      <ArticleList articles={articles} />
    </main>
    <Footer />
  </>
);

export default Blog;
