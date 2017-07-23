import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className="container">
    <ul className="nav nav-pills">
      <li><Link to="/flights">Flights</Link></li>
    </ul>
    {children}
  </div>
);

export default App;

App.propTypes = {
  children: PropTypes.element.isRequired,
};
