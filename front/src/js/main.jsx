import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

// Adding styles
import '../css/main.css';

import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root'), // eslint-disable-line
);
