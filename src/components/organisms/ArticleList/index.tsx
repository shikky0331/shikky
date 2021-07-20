import Article, { ArticleProps } from 'components/molecules/Article';
import { VFC } from 'react';
import './style.module.scss';

interface ArticleListProps {
  articles: ArticleProps[]
}

const ArticleList: VFC<ArticleListProps> = ({
  articles,
}) => (
  <ul>
    {articles.map(({
      url, title, date, introduction,
    }) => (
      <li>
        <Article
          url={url}
          title={title}
          date={date}
          introduction={introduction}
          key={url}
        />
      </li>
    ))}
  </ul>
);

export default ArticleList;
