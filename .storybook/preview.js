import { addDecorator } from "@storybook/react";
import { MemoryRouter as Router } from 'react-router-dom';
import "styles/global.scss"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(story => <Router initialEntries={['/']} > {story()} </Router>)
