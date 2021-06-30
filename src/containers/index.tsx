import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from 'containers/pages/home/index';
import { VFC } from 'react';

const Containers: VFC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Containers;
