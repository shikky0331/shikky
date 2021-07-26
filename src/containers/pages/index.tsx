import { VFC } from 'react';
import Blog from 'components/templates/Blog';

const Pages: VFC = () => {
  const articles = [
    {
      url: '/posts/5', title: 'How Are Function Components Defferent from Classes?', date: 'February 13, 2021', introduction: 'This is my 5th blog post',
    },
    {
      url: '/posts/4', title: 'forth blog post', date: 'March 23, 2021', introduction: 'This is my 4th blog post',
    },
    {
      url: '/posts/3', title: 'third blog post', date: 'April 4, 2021', introduction: 'This is my 3th blog post',
    },
    {
      url: '/posts/2', title: 'second blog post', date: 'May 30, 2021', introduction: 'This is my 2th blog post',
    },
    {
      url: '/posts/1', title: 'first blog post', date: 'July 21, 2021', introduction: 'This is my 1th blog post',
    },
  ];

  return (
    <Blog articles={articles} />
  );
};

export default Pages;
