import React, { Component } from 'react'

export default class Textfield extends Component {

    constructor(props) {
        super(props)
        this.state = {
            incomeValue: 0,
            taxValue: 0.00
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = parseInt(target.value)
        const name = target.name;
    
        this.setState({
          [name]: value
        });

        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label>Annual Income: </label>
            <input type="number" value={this.state.incomeValue}
                name="incomeValue"
                onChange={this.handleChange} />

            <label>State Tax: </label>
            <input type="number" value={this.state.taxValue}
                name="taxValue"
                onChange={this.handleChange} />

            <input type="submit" value="Submit" />
        </form>
        )
    }
}