import React, { Component } from 'react';
import moment from 'moment';

function WeekHeader(props) {
  return ( 
      <div className="weekdays">
        <span className="day">Sun</span>
        <span className="day">Mon</span>
        <span className="day">Tue</span>
        <span className="day">Wed</span>
        <span className="day">Thu</span>
       	<span className="day">Fri</span>
       	<span className="day">Sat</span>
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
  const daysView = weekData.map((date) => <span>{date.getDate()}</span>);
  return (
    <div>
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
    this.state = {date: moment()};
  }

  renderMonthLabel() {
    return <span>{this.state.date.format("MMMM, YYYY")}</span>;
  }


  render() {
    return (
      <div>
        <h1>React Calendar tutorial</h1>
        <WeekHeader/>
        <WeekList month='1' year='2018'/>
      </div>
    );
  }

  
}

export default Calendar;