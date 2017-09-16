import React, { Component } from 'react';

class AddAppointment extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      start: '',
      end: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) { 
    this.setState({ [event.target.id]: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const { addEvent } = this.props;

    addEvent(this.state);
  }
  
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input onChange={this.handleOnChange} id="name" type="text"/>
        <input onChange={this.handleOnChange} id="start" type="time" />
        <input onChange={this.handleOnChange} id="end" type="time" />
        <button>Add</button>
      </form>
    )
  }
}

export default AddAppointment;