import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor() {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0
        }
    }
    stid = 0;
    startTime = (btstart) => {
        if (btstart == "Start") {
            this.stid = setInterval(() => {
                if (this.state.second < 59) {
                    this.setState({
                        second: this.state.second + 1
                    })
                }
                else if (this.state.minute < 59) {
                    this.setState({
                        minute: this.state.minute + 1,
                        second: 0
                    })
                }
                else {
                    this.setState({
                        hour: this.state.hour + 1,
                        minute: 0,
                        second: 0
                    })
                }
            }, 1000)
            window.startpause.innerText = "Pause";
        }
        else {
            window.startpause.innerText = "Start";
            clearInterval(this.stid);
        }
    }
    stopTime = () => {
        this.setState({
            hour: 0,
            minute: 0,
            second: 0
        })
        clearInterval(this.stid);
        window.startpause.innerText = "Start";
    }

    render() {
        return (
            <div>
                <div className="time">
                    {this.state.hour < 10 ? "0" + this.state.hour : this.state.hour}:
                    {this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}:
                    {this.state.second < 10 ? "0" + this.state.second : this.state.second}
                    <br/>
                    <button id="startpause" onClick={(e) => this.startTime(e.target.innerText)}>Start</button>
                    <button onClick={this.stopTime}>Reset</button>
                </div>
                
            </div>
        );
    }
}

export default Stopwatch;