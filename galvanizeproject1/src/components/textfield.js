import React, { Component } from 'react'

export default class Textfield extends Component {

    constructor(props) {
        super(props)
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event);
        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label>Annual Income: </label>
            <input type="number" value={this.props.incomeValue}
                name="incomeValue"
                onChange={this.handleChange} />

            <label>State Tax: </label>
            <input type="number" value={this.props.taxValue}
                name="taxValue"
                onChange={this.handleChange} />

            <input type="submit" value="Submit" />
        </form>
        )
    }
}