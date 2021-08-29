import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Pages from 'containers/pages';
import Blog from 'containers/pages/blog/date';
import { VFC } from 'react';

const Containers: VFC = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/blog/:date">
        <Blog />
      </Route>
      <Route path="/">
        <Pages />
      </Route>
    </Switch>
  </Router>
);

export default Containers;
