import { Component } from 'react';
import React from 'react';

import DaysContainer from '../containers/DayContainer';

const Week = ({ weekData }) => {
  const daysView = weekData.map((date) => {
    return <DaysContainer date={date} />;
  });

  return (
    <div className="days-container">
      {daysView}  
    </div>
  );
};

const DaysForMonthView = ({ daysDataByWeek }) => {
  const weekViewList = daysDataByWeek.map(
    weekData => <Week weekData={weekData}/>
  );
  
  return weekViewList;
};

export default DaysForMonthView;