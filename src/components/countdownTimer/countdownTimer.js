import { React, Component } from 'react';
import './countdownTimer.css';
import Timer from './timer/timer';

class CountdownTimerSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            days: 14,
            hours: 1,
            minutes: 1,
            seconds: 1,
        }
    }

    timerHandler = () => {
        let minutes = this.state.minutes;
        let hours = this.state.hours;
        let days = this.state.days;

        let minutesHaveRecentlyChanged = false;
        let hoursHaveRecentlyChanged = false;

        let seconds = this.state.seconds === 1 ? 60 : this.state.seconds - 1;

        if(seconds === 59){
            minutes = (this.state.minutes === 1 ? 60 : this.state.minutes - 1);
            minutesHaveRecentlyChanged = true;
        }

        if(minutesHaveRecentlyChanged && minutes === 59){
            hours =  this.state.hours === 0 ? 23 : this.state.hours - 1;
            minutesHaveRecentlyChanged = false;
            hoursHaveRecentlyChanged = true;
        }

        if(hoursHaveRecentlyChanged && hours === 23){
            days = this.state.days - 1;
            hoursHaveRecentlyChanged = false;
        }
        this.setState({
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days,
        });
    };

    render(){
        return (
            <div className="countdownTimerContainer">
                <Timer 
                    timeIn={"DAYS"} 
                    value={this.state.days} />
                <Timer 
                    timeIn={"HOURS"} 
                    value={this.state.hours} />
                <Timer 
                    timeIn={"MINUTES"} 
                    value={this.state.minutes} />
                <Timer 
                    timeIn={"SECONDS"} 
                    value={this.state.seconds} 
                    timerHandler={this.timerHandler} />
            </div>
        );
    }
}

export default CountdownTimerSection;