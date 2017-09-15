import React, { Component } from 'react';
import Slots from './Slots';
import Appointments from './Appointments';
import moment from 'moment';
import { slotTimes, activities } from '../fixtures';
import { getKey } from '../helpers';
import './styles/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      slotTimes,
      activities
    }
    this.getStartingDates = this.getStartingDates.bind(this);
  }

  getStartingDates() {
    return this.state.activities.sort().reduce((obj, element) => {
      const hour = moment(element.start).format('h');

      if (!obj[hour]) {
        obj[hour] = true;
      }

      return obj;
    }, {});
  }

  

  render() {
    const { slotTimes } = this.state;
    const slots = slotTimes.map(slot => <Slots key={getKey()} slot={slot} />)
    const appointments = activities.map(appointment => <Appointments key={getKey()} appointment={appointment} />)

    console.log(this.getStartingDates())

    return (
      <div className="App">
        <h1>Day</h1>
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
