import React, { Component } from "react";
import Textfield from "./textfield";

class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            incomeValue: 0,
            taxValue: 0
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(event){
        const target = event.target;
        const value = parseInt(target.value)
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        console.log("Calculator did change state: " + name + " " + value);
    }
    
    calculateAfterTaxPartition(income, taxPercent, percentOfIncome){
        const convertedTax = (100- parseInt(taxPercent))/100;
        const convertedPercentOfIncome = percentOfIncome/100;
        return income*convertedTax*convertedPercentOfIncome;
    }

    render() {
        return(
        <Textfield incomeValue = {this.state.incomeValue} 
        taxValue = {this.state.taxValue} 
        onTextfieldChange = {this.updateState}/>
        )}
}

export default Calculator;