import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment';

import * as timeUtils from '../timeUtils';
import { Day } from '../components';
import { Label } from 'react-bootstrap';

const DateLabel = ({ date }) => {
  return ( 
    <div>
      <Label>{date.toString()}</Label>
    </div>
  );      
};

const mapStateToProps = (state) => {
  return {
    date: state.selectedDate ? state.selectedDate : '',
  } 
};

const DateDisplay = connect(mapStateToProps, null)(DateLabel);

export default DateDisplay;