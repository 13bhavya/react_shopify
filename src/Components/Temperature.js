import React, { Component } from 'react'
import Boiling from './Boiling';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class Temperature extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTempChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <fieldset>
                    <legend>Enter Temperature in {scaleNames[scale]}</legend>
                    <input
                        value={temperature}
                        onChange={this.handleChange} />
                </fieldset>
            </div>
        )
    }
}

export default Temperature
