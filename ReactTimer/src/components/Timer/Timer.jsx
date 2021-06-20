import React, { Component } from 'react';
import Button from '../Button';
import Input from '../Input';
import './Timer.scss';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeInSecondsNum: 0,
            timeInSecondsStr: '',
            errorMessage: '',
            interval: null,
            timeToShow: '',
        };
    }

    getTime = (str) => {
        let hours = Math.floor((str / 60) / 60);
        let minutes = Math.floor(str / 60 % 60);
        let seconds = str % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        hours = hours < 10 ? `0${hours}` : hours;
        return `${hours}:${minutes}:${seconds}`;
    }

    handleInput = (e) => {
        this.setState({
            timeInSecondsStr: e.target.value,
        });
    }

    handleSetTime = () => {
        const { timeInSecondsStr } = this.state;
        if (!Number(timeInSecondsStr)) {
            this.setState({
                errorMessage: 'only numbers',
                timeInSecondsStr: '',
            });
        } else {
            this.setState({
                timeInSecondsNum: Number(timeInSecondsStr),
                errorMessage: '',
                timeInSecondsStr: '',
                timeToShow: this.getTime(timeInSecondsStr),
            });
        }
    }

    handleStartTime = () => {
        const { interval, timeInSecondsNum } = this.state;
        this.setState({
            errorMessage: '',
        });
        const change = setInterval(() => {
            const { timeInSecondsNum } = this.state;
            if (timeInSecondsNum === 1) {
                this.handleResetTime();
                this.setState({
                    timeInSecondsNum: 0,
                    errorMessage: 'timer finished',
                });
            }
            this.setState({
                timeToShow: this.getTime(timeInSecondsNum - 1),
                timeInSecondsNum: timeInSecondsNum - 1,
            });
        }, 1000);
        if (timeInSecondsNum === 0) {
            clearInterval(interval);
        }
        this.setState({
            interval: change,
        });
    }

    handleResetTime = () => {
        const { interval } = this.state;
        clearInterval(interval);
        this.setState({
            timeInSecondsNum: 0,
            timeToShow: '00:00:00',
            errorMessage: '',
        });
    }

    handleStopTime = () => {
        const { interval } = this.state;
        clearInterval(interval);
        this.setState({
            errorMessage: 'time is stopped',
        });
    }

    render() {
        const { timeInSecondsStr, errorMessage, timeToShow } = this.state;
        return (
            <div className="Timer">
                <Input value={timeInSecondsStr} onChange={this.handleInput}/>
                <div className="ButtonSpace">
                    <Button value='set' onClick={this.handleSetTime}/>
                    <Button value='stop' onClick={this.handleStopTime}/>
                    <Button value='start' onClick={this.handleStartTime}/>
                    <Button value='reset' onClick={this.handleResetTime}/>
                </div>
                <p className='timeBoard'>{timeToShow}</p>
                <p className="message">{errorMessage}</p>
            </div>
        );
    }
}
export default Timer;
