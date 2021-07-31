import { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import Header from './index';

export default {
  title: 'organisms/Header',
  component: Header,
} as Meta;

const Template: Story<ComponentProps<typeof Header>> = () => <Header />;

export const Default = Template.bind({});
Default.args = {
};
