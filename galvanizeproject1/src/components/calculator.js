import React, { Component } from "react";
import Textfield from "./textfield";

class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            incomeValue: 0,
            taxValue: 0.00
        }
        this.handleStateChange = this.handleStateChange.bind(this);
    }

    handleStateChange(event){
        const target = event.target;
        const value = parseInt(target.value)
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        console.log("Calculator did change state: " + name + " " + value);
    }

    render() {
        return(
        <Textfield incomeValue = {this.state.incomeValue} 
        taxValue = {this.state.taxValue} 
        onChange = {this.handleStateChange}/>
        )}
}

export default Calculator;