import { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import Footer from './index';

export default {
  title: 'organisms/Footer',
  component: Footer,
} as Meta;

const Template: Story<ComponentProps<typeof Footer>> = () => <Footer />;

export const Default = Template.bind({});
Default.args = {
};
