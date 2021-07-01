import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Pages from 'containers/pages';
import { VFC } from 'react';

const Containers: VFC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Pages />
      </Route>
    </Switch>
  </Router>
);

export default Containers;
