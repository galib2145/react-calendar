import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment';

import { getWeekDataForCalendarView } from '../timeUtils.js';
import DaysForMonthView from '../components/DaysForMonthView';

const mapStateToProps = (state) => {
  return {
    daysDataByWeek: getWeekDataForCalendarView(
      state.monthAndYear.month,
      state.monthAndYear.year
    )   
  };
};

const DaysForMonthContainer = connect(
    mapStateToProps, null)(DaysForMonthView);

export default DaysForMonthContainer;