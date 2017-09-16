import React from 'react';
import moment from 'moment';
import './styles/Appointments.css';

const Appointments = ({ name, top, height, width, left }) => {
  const style = { height, top, width, left };


  return (
    <article style={style} className="appointment">
      <h2 className="appointment-title">{name}</h2>
    </article>
  );
}

export default Appointments;