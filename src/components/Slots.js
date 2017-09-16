import React from 'react';
import './styles/Slots.css';

const Slots = ({ slot }) => {
  const type = slot > 12 ? 'PM' : 'AM';
  const half = +slot === 24 ? null : <div className="time-separator-half">{`${slot}: 30 ${type}`}</div>;
  
  return (
    <article className="slot">
      <div className="time-separator">{slot} <span>{type}</span></div>
      {half}
    </article>
  );
}

export default Slots;