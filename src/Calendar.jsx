import React, { Component } from 'react';
import moment from 'moment';

import * as timeUtils from './timeUtils';

const WeekHeader = () => {
  return ( 
      <div className="days-container">
        <span className="week-cell">Sun</span>
        <span className="week-cell">Mon</span>
        <span className="week-cell">Tue</span>
        <span className="week-cell">Wed</span>
        <span className="week-cell">Thu</span>
       	<span className="week-cell">Fri</span>
       	<span className="week-cell">Sat</span>
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

const Day = ({ date, fromCurrentMonth, isSelected, onClick }) => {
  let dayStyle = 'day-cell';
  if (!fromCurrentMonth) 
    dayStyle += ' not-current-month';
  if (isSelected) 
    dayStyle += ' active';

  return ( 
    <span className={dayStyle} onClick={() => onClick(date.getDate())}>
      {date.getDate()}
    </span>
  );
}

const Week = ({ weekData, onDaySelect }) => {
  const daysView = weekData.map((date) => 
    <Day date={date} onClick={onDaySelect}/> );
  return (
    <div className="days-container">
      {daysView}  
    </div>
  );
}

const WeekList = ( { month, year, onDaySelect }) => {
  const weekDataList = getWeekDataForCalendarView(month, year);
  const weekViewList = weekDataList.map(
    weekData => <Week weekData={weekData} onDaySelect={onDaySelect}/>
  )
  return weekViewList;
};

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateConstruct: timeUtils.getDateConstructFromJSDate(new Date()),
    };

    this.onDaySelect = this.onDaySelect.bind(this);
  }

  onDaySelect(selectedDay) {
    this.setState({
      day: selectedDay,
    });

    console.log(`Selected Day: ${selectedDay}`);
  }

  // renderPreviousMonth() {
  //   const currentDate = this.state.selectedDate;
  //   currentDate.setMonth(currentDate.getMonth() - 1);
  //   const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  //   this.setState({selectedDate: newDate});
  // }

  // renderNextMonth() {
  //   const currentDate = this.state.selectedDate;
  //   currentDate.setMonth(currentDate.getMonth() + 1);
  //   const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  //   this.setState({selectedDate: newDate});
  // }

  render() {
    return (
      <div className="calendar">
        <div className="month-label">
          <span className="month-text">
            {timeUtils.getMonthYearStrFromDateConstruct(this.state.dateConstruct)}
          </span>
        </div>
        <WeekHeader/>
        <WeekList 
          month={this.state.dateConstruct.month} 
          year={this.state.dateConstruct.year} 
          onDaySelect={this.onDaySelect}/>
      </div>
    );
  }
}

export default Calendar;