import React, { Component } from 'react';
import moment from 'moment';

function WeekHeader(props) {
  return ( 
      <div className="days-header">
        <span className="header-item">Sun</span>
        <span className="header-item">Mon</span>
        <span className="header-item">Tue</span>
        <span className="header-item">Wed</span>
        <span className="header-item">Thu</span>
       	<span className="header-item">Fri</span>
       	<span className="header-item">Sat</span>
    </div>
  );
}

function getMonthDurationForCalendarView(month, year) {
    const firstOfMonth = new Date(year, month, 1);
    const lastOfMonth = new Date(year, month + 1, 0);

    const startDate = new Date();
    startDate.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());

    const endDate = new Date();
    endDate.setDate(lastOfMonth.getDate() + (6 - lastOfMonth.getDay()));

    return {
        startDate,
        endDate
    }
}

function getWeekDataForCalendarView(month, year) {
    const monthInterval = getMonthDurationForCalendarView(month, year);
    let currentDate = monthInterval.startDate;
    let numDays = 1;
    let weekDays = [];
    let weeks = [];

    while (currentDate <= monthInterval.endDate) {
        let newDate = new Date();
        newDate = new Date(currentDate.getTime());
        weekDays.push(newDate);
        if (numDays % 7 === 0) {
            weeks.push(weekDays);
            weekDays = [];
        }
        
        currentDate.setDate(currentDate.getDate() + 1);
        numDays += 1;
    }

    return weeks;
}

function Week(props) {
  const weekData = props.weekData;
  const daysView = weekData.map((date) => <span className="single-day">{date.getDate()}</span>);
  return (
    <div className="days-container">
      {daysView}  
    </div>
  );
}

class WeekList extends Component {
    constructor(props) {
       super(props); 
    }

    render() {
      const month = parseInt(this.props.month, 10);
      const year = parseInt(this.props.year);
      const weekDataList = getWeekDataForCalendarView(month, year);
      const weekViewList = weekDataList.map(weekData => <Week weekData={weekData}/>)
      return weekViewList;
    }
}

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date()
    };

    this.renderPreviousMonth = this.renderPreviousMonth.bind(this);
    this.renderNextMonth = this.renderNextMonth.bind(this);
  }

  renderPreviousMonth() {
    const currentDate = this.state.date;
    currentDate.setMonth(currentDate.getMonth() - 1);
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    this.setState({date: newDate});
  }

  renderNextMonth() {
    const currentDate = this.state.date;
    currentDate.setMonth(currentDate.getMonth() + 1);
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    this.setState({date: newDate});
  }

  render() {
    const currentDate = moment(this.state.date);
    return (
      <div>
        <h1>React Calendar tutorial</h1>
        <div className="month-header">
            <div className="prev" onClick={this.renderPreviousMonth}>
                <span>Prev</span>
            </div>
            <span className="month-text">{currentDate.format("MMMM, YYYY")}</span>
            <div className="next" onClick={this.renderNextMonth}>
                <span>Next</span>
            </div>
        </div>
        <WeekHeader/>
        <WeekList month={this.state.date.getMonth()} year={this.state.date.getYear()}/>
      </div>
    );
  }
}

export default Calendar;