import React, { Component } from "react";
import Textfield from "./textfield";
import DataCard from "./DataCard"

class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            incomeValue: 0,
            taxValue: 0
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(event) {
        const target = event.target;
        const value = parseInt(target.value)
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log("Calculator did change state: " + name + " " + value);
    }

    calculateAfterTaxPartition(income, taxPercent, percentOfIncome) {
        const convertedTax = (100 - parseInt(taxPercent)) / 100;
        const convertedPercentOfIncome = percentOfIncome / 100;
        return income * convertedTax * convertedPercentOfIncome;
    }

    render() {
        return (
            <div>
                <div>
                    <Textfield incomeValue={this.state.incomeValue}
                        taxValue={this.state.taxValue}
                        onTextfieldChange={this.updateState} />
                </div>
                <div>
                    <DataCard title="Income After Tax: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 100)} />
                    <DataCard title="Money for Needs: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 50)} />
                    <DataCard title="Money for Wants: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 30)} />
                    <DataCard title="Money for Savings: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 20)} />
                </div>
            </div>
        )
    }
}

export default Calculator;