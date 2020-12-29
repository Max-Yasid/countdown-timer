import React, { Component } from 'react';
import './timer.css';

class Timer extends Component {
    constructor(props){
        super(props);
        this.flipAnimation = {};
    }
    startTimer = () => {
        return setInterval(() => {
            this.props.timerHandler();
        }, 1000);
    }
    giveFormatToTime(time){
        return time < 10 ? "0" + time.toString() : time.toString();
    }

    componentDidMount = () => {
        if(this.props.timeIn === 'SECONDS'){
            this.startTimer();
            this.flipAnimation = {
                "animationName": "flipSeconds",
                "animationDuration": "1s",
            }
        }else if(this.props.timeIn === 'MINUTES'){
            this.flipAnimation = {
                "animationName": "flipMinutes",
                "animationDuration": "60s",
            }
        }else if(this.props.timeIn === 'HOURS'){
            this.flipAnimation = {
                "animationName": "flipHours",
                "animationDuration": "3600s",
            }
        }else if(this.props.timeIn === 'DAYS'){
            this.flipAnimation = {
                "animationName": "flipDays",
                "animationDuration": `${3600 * 24}s`,
            }
        }
    }

    render(){
        const secondsPlusOne = (this.props.value - 1).toString();
        return (
            <div className="timerContainer">
                <div className="TimerContent">
                    <div className="secondAfter">
                        <span>{this.giveFormatToTime(secondsPlusOne)}</span>
                    </div>
                    <div style={this.flipAnimation} className="topPartTimer">
                        <div className="topParttext">
                            <span>{this.giveFormatToTime(this.props.value)}</span>
                        </div>
                        <div className="topPartFiller"></div>
                        <div className="backTopPart">
                            <span>{this.giveFormatToTime(secondsPlusOne)}</span>
                        </div>
                    </div>
                    <div className="separator">
                        <div className="circle leftCircle"></div>
                        <div className="hr"></div>
                        <div className="circle rightCircle"></div>
                    </div>
                    <div className="bottomPartTimer">
                        <span>{this.giveFormatToTime(this.props.value)}</span>
                    </div>
                </div>
                <div className="timeIn">
                    {this.props.timeIn}
                </div>
            </div>
        );
    }
}

export default Timer;