import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
    <div className="container">
      <ul className="nav nav-pills">
            <li><Link to="/flights">Flights</Link></li>
      </ul>
      {this.props.children}
    </div>
    );
  }
}

export default App;