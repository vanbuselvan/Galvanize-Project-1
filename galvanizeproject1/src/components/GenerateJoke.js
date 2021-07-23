import React, { Component } from 'react'
import DataCard from "./DataCard"
import axios from 'axios';


export default class GenerateJoke extends Component {

    constructor(props) {
        super(props)
        this.state = {
            joke: "Click the button!",
        }
        this.getJoke = this.getJoke.bind(this)
    }

    getJoke(){
        axios.get(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`)
          .then(res => {
            console.log("response")
            console.log(res.data)
            this.setState({ joke: res.data.joke});
          })
    }

    render() {
        return (
            <div>
                <DataCard title="Here is a funny joke:" data={this.state.joke} />
                <button onClick={this.getJoke}>
                    Click me!
                </button>
            </div>
        )
    }
}