import React, { Component } from 'react';
import moment from 'moment';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {date: moment()};
  }

  render() {
    return (
      <div>
        <h1>React Calendar tutorial</h1>
        <p>{this.renderMonthLabel()}</p>
      </div>
    );
  }

  renderMonthLabel() {
    return <span>{this.state.date.format("MMMM, YYYY")}</span>;
  }
}

export default Calendar;