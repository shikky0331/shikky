import { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import Article from './index';

export default {
  title: 'molecules/Article',
  component: Article,
} as Meta;

const Template: Story<ComponentProps<typeof Article>> = ({
  url, title, date, introduction,
}) => <Article url={url} title={title} date={date} introduction={introduction} />;

export const Default = Template.bind({});
Default.args = {
  url: '/posts/5',
  title: 'How Are Function Components Defferent from Classes?',
  date: 'February 13, 2021',
  introduction: 'This is my 5th blog post',
};
