import React from 'react';
import './styles/Slots.css';

const Slots = ({ slot }) => {
  return (
    <article className="slot">
      <div className="time-separator">{slot}</div>
      <div className="time-separator">{`${slot}: 30`}</div>
    </article>
  );
}

export default Slots;