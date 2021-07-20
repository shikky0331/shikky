import Article, { ArticleProps } from 'components/molecules/Article';
import { VFC } from 'react';

interface ArticleListProps {
  articles: ArticleProps[]
}

const ArticleList: VFC<ArticleListProps> = ({
  articles,
}) => (
  <>
    {articles.map(({
      url, title, date, introduction,
    }) => (
      <Article url={url} title={title} date={date} introduction={introduction} key={url} />
    ))}
  </>
);

export default ArticleList;
