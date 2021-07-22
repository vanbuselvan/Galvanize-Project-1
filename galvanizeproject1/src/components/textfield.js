import React, { Component } from 'react'
import './Textfield.css'

export default class Textfield extends Component {

    constructor(props) {
        super(props)
        
        this.didUpdateTextfield = this.didUpdateTextfield.bind(this);
        this.didHitSubmit = this.didHitSubmit.bind(this);
    }

    didUpdateTextfield(event) {
        this.props.onTextfieldChange(event);
        console.log(this.state)
    }

    didHitSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (<form onSubmit={this.didHitSubmit}>
            <label class="Label">Annual Income: </label>
            <input type="number" value={this.props.incomeValue}
                name="incomeValue"
                onChange={this.didUpdateTextfield} />

            <label class="Label">State Tax: </label>
            <input type="number" value={this.props.taxValue}
                name="taxValue"
                onChange={this.didUpdateTextfield} />

            <input type="submit" value="Submit" />
        </form>
        )
    }
}