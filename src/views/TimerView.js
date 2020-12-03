import React from 'react';

class TimerView extends React.Component {
  state = {
    rounds: null,
    restTime: null,
    workTime: null,
    currentTime: null,
    currentRound: null,
    isWork: true,
    isRunning: false,
  };

  handleInputChange = (e) => {
    switch (e.target.id) {
      case 'rounds':
        this.setState({
          rounds: e.target.value,
          currentRound: e.target.value,
        });
        break;
      case 'workTime':
        this.setState({ workTime: e.target.value });
        this.setState({ currentTime: e.target.value });
        break;
      case 'restTime':
        this.setState({ restTime: e.target.value });
        break;
      default:
        this.manageInterval(e.target.id);
        break;
    }
  };

  manageInterval = (cmd) => {
    if (
      cmd === 'start'
      && this.state.currentTime >= 0
      && this.state.workTime > 0
      && this.state.restTime > 0
      && this.state.rounds > 0
      && !this.state.isRunning
    ) {
      this.setState({ isRunning: true });
      if (this.state.isWork) {
        this.setState({ currentSetType: 'Work' });
      }
      this.timer = setInterval(() => {
        if (this.state.currentTime === 0) {
          if (this.state.isWork) {
            this.setState({ currentSetType: 'Rest' });
            this.setState({ currentTime: this.state.restTime });
          } else {
            this.setState({ currentSetType: 'Work' });
            this.setState({ currentTime: this.state.workTime });
            this.setState({ rounds: this.state.currentRound - 1 });
            if (this.state.currentRound === 0) {
              clearInterval(this.timer);
              this.setState({
                rounds: this.state.rounds,
                restTime: this.state.restTime,
                workTime: this.state.workTime,
                currentRound: this.state.rounds,
                currentSetType: null,
                isRunning: false,
              });
            }
          }
          this.setState({ isWork: !this.state.isWork });
          return;
        }
        this.setState({ currentTime: this.state.currentTime - 1 });
      }, 1000);
    } else if (cmd === 'stop') {
      this.setState({
        isRunning: false,
      });
    } else if (cmd === 'reset') {
      this.setState({
        rounds: null,
        restTime: null,
        workTime: null,
        currentTime: null,
        currentRound: null,
        currentSetType: null,
        isRunning: false,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="timerDisplay" style={{ textAlign: 'center', marginTop: '15%' }}>
          Timer Display
          <div>Rounds: {this.state.rounds}</div>
          <div>Work Time: {this.state.workTime}</div>
          <div>Rest Time: {this.state.restTime}</div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '15%' }}>
          <div> Current Round: {this.state.currentRound}</div>
          <div> {this.state.currentSetType}</div>
          <div> Current Time: {this.state.currentTime}</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '25%',
          }}
        >
          <div>
            <label htmlFor='rounds'>Rounds:</label>
            <input
              onChange={this.handleInputChange}
              type='number'
              id='rounds'
              name='rounds'
              min='1'
              max='15'
            />
          </div>
          <div>
            <label htmlFor='workTime'>Work Time (sec):</label>
            <input
              onChange={this.handleInputChange}
              type='number'
              id='workTime'
              name='workTime'
              min='1'
              max='360'
            />
          </div>
          <div>
            <label htmlFor='restTime'>Rest Time (sec):</label>
            <input
              onChange={this.handleInputChange}
              type='number'
              id='restTime'
              name='restTime'
              min='1'
              max='360'
            />
          </div>
          <button id='start' onClick={this.handleInputChange}>
            Start
          </button>
          <button id='stop' onClick={this.handleInputChange}>
            Stop
          </button>
          <button id='reset' onClick={this.handleInputChange}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default TimerView;
