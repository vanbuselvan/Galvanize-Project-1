import React, { Component } from 'react'
import './Textfield.css'

export default class Textfield extends Component {

    constructor(props) {
        super(props)

        this.didUpdateTextfield = this.didUpdateTextfield.bind(this);
    }

    didUpdateTextfield(event) {
        this.props.onTextfieldChange(event);
        console.log(this.state)
    }

    render() {
        return (
            <form>
                <div class="form-row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="regular1" class="control-label">Enter Income($):</label>
                            <input type="number"
                                class="form-control"
                                value={this.props.incomeValue}
                                name="incomeValue"
                                onChange={this.didUpdateTextfield} />
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="form-group">
                            <label for="regular1" class="control-label">Enter State Tax(%):</label>
                            <input type="number"
                                class="form-control"
                                value={this.props.taxValue}
                                name="taxValue"
                                onChange={this.didUpdateTextfield} />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}