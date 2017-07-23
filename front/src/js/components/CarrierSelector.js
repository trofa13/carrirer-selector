import React, { Component } from 'react';
import PropTypes from 'prop-types';

const createItem = (item, key) => {
    return (
        <option
            key={key}
            value={item}>
            {item}
        </option>
    );
}


export default class CarrierSelector extends Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ''
        }
    }
    render() {
        return(
        <div>
            <select value={this.state.value} onChange={this.handleChange}>
                <option value=''>All Carriers</option>
                {this.props.carriers.map(createItem)}
            </select>
        </div>
        )
    }

    handleChange(event) {
        const selectedValue = event.target.value;
        this.setState({ value: selectedValue });
        this.props.onSelect(selectedValue);
    }
}

CarrierSelector.PropTypes = {
    carriers: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired
};