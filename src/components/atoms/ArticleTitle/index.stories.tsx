import { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import ArticleTitle from './index';

export default {
  title: 'ArticleTitle',
  component: ArticleTitle,
} as Meta;

const Template: Story<ComponentProps<typeof ArticleTitle>> = ({ url, title }) => (
  <ArticleTitle
    url={url}
    title={title}
  />
);

export const Default = Template.bind({});
Default.args = {
  url: '/',
  title: 'first blog post',
};
