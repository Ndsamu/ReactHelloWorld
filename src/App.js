import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { swapStatus: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            swapStatus: !state.swapStatus
        }));
    }

    render() {
        if (this.state.swapStatus) {
            return (
                <div className="App">
                    <button onClick={this.handleClick}>
                        Swap
                    </button>
                    <h1>Hello, world!</h1>
                </div>
            ) 
        } else {
            return (
                <div className="App">
                    <button onClick={this.handleClick}>
                        Swap
                    </button>
                    <h1>Wello, horld!</h1>
                </div>
            )
        }
        
    }
}

export default hot(module)(App);