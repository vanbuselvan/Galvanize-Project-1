import React, { Component } from "react";
import Textfield from "./textfield";

class Calculator extends Component {

    constructor() {
        super()
        this.state = {
            income: 0,
            taxPercent: 0.00
        }
    }

    render() {
        return(
        <Textfield />
        )}
}

export default Calculator;