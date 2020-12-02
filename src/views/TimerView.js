import React, { Component } from 'react';

export default class TimerView extends Component {
  state = {
    interval: {},
    workTime: 0,
    restTime: 0,
    rounds: 0,
  };

  render() {
    return (
        <form>
            <h2 className='d-flex justify-content-center'>Timer</h2>
      <div className='d-flex flex-wrap justify-content-center my-3'>
        <input type='text' name='workTime' placeholder='work time' />
        <input type='text' name='restTime' placeholder='rest time'/>
        <input type='text' name='rounds' placeholder='# of rounds'/>
        </div>

        <div className='d-flex flex-wrap justify-content-center'>
        <button className='start mx-5'>Start</button>
        <button className='stop mx-5'>stop</button>
        <button className='reset mx-5'>reset</button>

        <div class='clock'></div>
      </div>
      </form>
    );
  }
}
