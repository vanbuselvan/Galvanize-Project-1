import React, { Component } from "react";
import Textfield from "./textfield";
import DataCard from "./DataCard"
import GenerateJoke from "./GenerateJoke.js"
import { PieChart } from 'react-minimal-pie-chart';
import './Calculator.css'

class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            incomeValue: 1,
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
            <div class="Body">
                <div>
                    <Textfield incomeValue={this.state.incomeValue}
                        taxValue={this.state.taxValue}
                        onTextfieldChange={this.updateState} />
                </div>
                <div class="DataCards">
                    <DataCard title="Income After Tax: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 100)} />
                    <DataCard title="Money for Needs: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 50)} />
                    <DataCard title="Money for Wants: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 30)} />
                    <DataCard title="Money for Savings: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 20)} />
                </div>
                <div>
                    <GenerateJoke />
                </div>
                <div style={{width: "40vh", height: "40vh"}}>
                    <PieChart
                        data={[
                            { title: 'Needs', value: this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 50) , color: '#0000FF' },
                            { title: 'Wants', value: this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 30) , color: '#FFFF00' },
                            { title: 'Savings', value: this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 20) , color: '#00FF00' },
                        ]}
                    />
                </div>
            </div>
        )
    }
}

export default Calculator;