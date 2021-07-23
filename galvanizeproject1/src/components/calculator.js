import React, { Component } from "react";
import Textfield from "./textfield";
import DataCard from "./DataCard"
import GenerateJoke from "./GenerateJoke.js"
import { PieChart } from 'react-minimal-pie-chart';
import './Calculator.css'

const defaultLabelStyle = {
    fontSize: '7px',
    fontFamily: 'sans-serif',
}
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
                    <div class="row">
                        <div class="col-12">
                            <DataCard title="Income After Tax: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 100)} />
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-4">
                            <DataCard title="Money for Needs: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 50)} />
                        </div>

                        <div class="col-4">
                            <DataCard title="Money for Wants: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 30)} />
                        </div>

                        <div class="col-4">
                            <DataCard title="Money for Savings: " data={"$" + this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 20)} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <GenerateJoke />
                        </div>
                    </div>
                </div>
                <div style={{ width: "100vh", height: "100vh" }}>
                    <PieChart
                        data={[
                            { title: 'Needs', value: this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 50), color: '#0000FF' },
                            { title: 'Wants', value: this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 30), color: '#FFFF00' },
                            { title: 'Savings', value: this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 20), color: '#00FF00' },
                        ]}
                        label={({ dataEntry }) => {
                            if (dataEntry.value === this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 50)) {
                                return "Needs";
                            }
                            else if (dataEntry.value === this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 30)) {
                                return "Wants";
                            }
                            else if (dataEntry.value === this.calculateAfterTaxPartition(this.state.incomeValue, this.state.taxValue, 20)) {
                                return "Savings";
                            }

                        }


                        }
                        labelStyle={{
                            ...defaultLabelStyle,
                        }}

                    />
                </div>
            </div>
        )
    }
}

export default Calculator;