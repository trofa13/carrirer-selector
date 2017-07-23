import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './containers/App';
import Flights from './containers/Flights';
import NotFound from './components/NotFound';

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRedirect to="/flights" /> {/* INDEX REDIRECT */}
      <Route path="/flights" component={Flights} />
    </Route>
    <Route path="*" component={NotFound} />
  </div>
);

export default routes;
