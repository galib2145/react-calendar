import React, { Component } from 'react';
import moment from 'moment';

import * as timeUtils from '../timeUtils';

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
};

const MonthHeader = ({
  monthHeaderStr,
  onLeftArrowClick,
  onRightArrowClick,
}) => {
  return (
    <div className="month-label">
      <span className="month-text">
        {monthHeaderStr}
      </span>
      <i className="fa fa-angle-left vc left" onClick={onLeftArrowClick}/>
      <i className="fa fa-angle-right vc right" onClick={onRightArrowClick}/>
    </div>
  );
};

const Day = ({ date, isActive, onClick }) => {
  let dayStyle = 'day-cell';
  if (isActive) 
    dayStyle += ' active';

  return ( 
    <span className={dayStyle} onClick={() => onClick(date)}>
      {date.getDate()}
    </span>
  );
};

export { MonthHeader, WeekHeader, Day };