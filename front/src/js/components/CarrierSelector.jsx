import React, { Component } from 'react';
import PropTypes from 'prop-types';

const createItem = (item, key) => (
  <option
    key={key}
    value={item}
  >
    {item}
  </option>
    );


export default class CarrierSelector extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    const selectedValue = event.target.value;
    this.setState({ value: selectedValue });
    this.props.onSelect(selectedValue);
  }

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="">All Carriers</option>
          {this.props.carriers.map(createItem)}
        </select>
      </div>
    );
  }
}

CarrierSelector.propTypes = {
  carriers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};
