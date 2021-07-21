import React, { Component } from 'react'

export default class Textfield extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }
// TODO: Include both textfields and the button in here.
    render() {
        return (<form>
            <label for={this.props.valueType}>Annual Income: </label>
            <input type="number" id={this.props.valueType} />
        </form>
        )
    }
}