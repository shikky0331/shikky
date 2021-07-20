import { VFC } from 'react';
import ArticleTitle, { ArticleTitleProps } from 'components/atoms/ArticleTitle';
import styles from './style.module.scss';

export interface ArticleProps extends ArticleTitleProps {
  date: string;
  introduction: string;
}

const Article: VFC<ArticleProps> = ({
  url,
  title,
  date,
  introduction,
}) => (
  <article className={styles.post}>
    <ArticleTitle url={url} title={title} />
    <small>{date}</small>
    <p className={styles.p}>{introduction}</p>
  </article>
);

export default Article;
