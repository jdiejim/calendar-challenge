import React from 'react';
import moment from 'moment';
import './styles/Appointments.css';

const Appointments = ({ appointment }) => {
  const { name, start, end } = appointment;
  const offset = +moment(end).format('h') - moment(start).format('h');
  const offsetMin = (+moment(end).format('m') - moment(start).format('m')) / 60;
  const topMin = +moment(start).format('m') / 60;
  
  const top = `${(+moment(start).format('H') + topMin) * 100}px`;
  const height = `${(offset + offsetMin) * 100 }px`;   
  const style = { height, top };

  return (
    <article style={style} className="appointment">
      <h2 className="appointment-title">{name}</h2>
    </article>
  );
}

export default Appointments;