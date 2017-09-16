import React, { Component } from 'react';
import Slots from './Slots';
import Appointments from './Appointments';
import AddAppointment from './AddAppointment';
import moment from 'moment';
import { activities, objectTimes } from '../fixtures';
import { getKey } from '../helpers';
import './styles/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      slotTimes: Object.keys(objectTimes),
      activities
    }
    this.getOverlaps = this.getOverlaps.bind(this);
  }

  getOverlaps() {
    const { activities } = this.state;
    const times = Object.assign({}, objectTimes);

    for (let i = 0; i < activities.length; i++) {
      const current = activities[i];
      const start = +moment(current.start).format('H');
      const end = +moment(current.end).format('H');
      const offset = end - start;

      for (let y = 0; y < offset + 1; y++) {
        times[start + y]++;
      }
    }

    return times;
  }

  render() {
    const { slotTimes } = this.state;
    const slots = slotTimes.map(slot => <Slots key={getKey()} slot={slot} />)
    const times = this.getOverlaps();

    const appointments = activities.map(({ name, start, end }) => {
      const offset = +moment(end).format('H') - moment(start).format('H');
      const offsetMin = (+moment(end).format('m') - moment(start).format('m')) / 60;
      const topMin = +moment(start).format('m') / 60;
      const top = `${(+moment(start).format('H') + topMin) * 100}px`;
      const height = `${(offset + offsetMin) * 100 }px`; 
      let width = `${90}%`;
      let left = `${0}px`;
      
      if (times[moment(start).format('H')] > 1) {
        const n = times[moment(start).format('H')] - 1;

        width = '400px';
        left = `${400 * n}px`
        
        times[moment(start).format('H')]--;

        if (times[moment(start).format('H')] === 1) {
          times[moment(start).format('H')] ='last';
          left = '400px'
        }
      }
      
      if (times[moment(start).format('H')] === 'last') {
        width = '400px';
      }

      return <Appointments key={getKey()} name={name} top={top} height={height} width={width} left={left} />;
    });

    return (
      <div className="App">
        <h1 className="title">Calendar</h1>
        <AddAppointment />
        <section className="slot-list">
          <section className="slot-times">
            {slots}
          </section>
          <section className="appointment-times">
            {appointments}
          </section>
        </section>
      </div>
    );
  }
}

export default App;
