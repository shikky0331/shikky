import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Pages from 'containers/pages';
import Blog from 'containers/pages/blog/date';
import { VFC } from 'react';
import { Helmet } from 'react-helmet';

const Containers: VFC = () => (
  <>
    <Helmet
      defaultTitle="Shikky"
      titleTemplate="%s | Shikky"
    >
      <title>Shikky</title>
      <link rel="canonical" href="https://shikky0331.github.io/shikky" />
      <meta charSet="utf-8" />
      <meta property="og:site_name" content="Shikky" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@shikky0331" />
    </Helmet>
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
  </>
);

export default Containers;
