import React from 'react';
import moment from 'moment';
import './styles/Appointments.css';

const Appointments = ({ appointment }) => {
  const { name, start, end } = appointment;
  const offset = +moment(end).format('h') - moment(start).format('h');
  const height = `${offset * 100}px`; 
  const top = `${moment(start).format('H') * 100}px`;
  console.log(moment(end).format('h'));
  console.log(moment(start).format('h'));
  console.log(+moment(end).format('h') - moment(start).format('h'));
  
  
  // const style = { height };
  const style = { height, top };

  return (
    <article style={style} className="appointment">
      
    </article>
  );
}

export default Appointments;