import { VFC } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

export interface ArticleTitleProps {
  url: string;
  title: string;
}

const ArticleTitle: VFC<ArticleTitleProps> = ({
  url,
  title,
}) => (
  <h3 className={styles.h3}><Link to={url}>{title}</Link></h3>
);

export default ArticleTitle;
