import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment';

import * as timeUtils from '../timeUtils';
import { Day } from '../components';

const mapStateToProps = (state, ownProps) => {
  return {
    isActive: timeUtils.compareDatesWithoutTime(
      state.selectedDate,
      ownProps.date
    ), 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (date) => {
      dispatch({
        selectedDate: date,
        type: 'SET_SELECTED_DATE',    
      }) 
    },
  };
};

const DaysContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Day);

export default DaysContainer;