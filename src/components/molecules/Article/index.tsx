import { VFC } from 'react';
import ArticleTitle, { ArticleTitleProps } from 'components/atoms/ArticleTitle';
import styles from './style.module.scss';

export type ArticleProps = {
  date: string;
  introduction: string;
} & ArticleTitleProps

const Article: VFC<ArticleProps> = ({
  url,
  title,
  date,
  introduction,
}) => (
  <article className={styles.wrapper}>
    <div className={styles.articleTitleWrapper}><ArticleTitle url={url} title={title} /></div>
    <small>{date}</small>
    <p className={styles.p}>{introduction}</p>
  </article>
);

export default Article;
