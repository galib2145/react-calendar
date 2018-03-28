import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment';
import { WeekHeader, MonthHeader } from '../components';

const mapStateToProps = (state) => {
  const date = new Date(
    state.monthAndYear.year,
    state.monthAndYear.month,
    1
  ); 
  return { monthHeaderStr: moment(date).format("MMMM, YYYY")}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLeftArrowClick: (id) => dispatch({ type: 'DECREMENT_MONTH', }),
    onRightArrowClick: (id) => dispatch({ type: 'INCREMENT_MONTH', })
  }
};

const MonthHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MonthHeader);

export default MonthHeaderContainer;