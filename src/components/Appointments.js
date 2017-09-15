import React from 'react';
import moment from 'moment';
import './styles/Appointments.css';

const Appointments = ({ appointment }) => {
  const { name, start, end } = appointment;
  const offset = +moment(end).format('h') - moment(start).format('h');
  const offsetMin = (+moment(end).format('m') - moment(start).format('m')) / 60;
  const height = `${(offset + offsetMin) * 100 }px`; 
  const top = `${moment(start).format('H') * 100}px`;
  console.log(height);
  // console.log(moment(start).format('H:M'));
  // console.log(+moment(end).format('h') - moment(start).format('h'));
  
  
  // const style = { height };
  const style = { height, top };

  return (
    <article style={style} className="appointment">
      
    </article>
  );
}

export default Appointments;