import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css'; 

import MonthHeaderContainer from './containers/MonthHeaderContainer';
import DaysForMonthContainer from './containers/DaysForMonthContainer';
import DateDisplay from './containers/DateDisplay';
import { WeekHeader } from './components';
import registerServiceWorker from './registerServiceWorker';
import { selectedDate, monthAndYear } from './reducers';


const calendarAppState = combineReducers({ 
  selectedDate,
  monthAndYear, 
});

const store = createStore(calendarAppState);
const Calendar = () => {
  return (
    <div>
      <div className="container">
        <MonthHeaderContainer/>
        <WeekHeader/>
        <DaysForMonthContainer/>
      </div>
      <br/>
      <DateDisplay/>
    </div>  
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Calendar {...store.getState()}/>
  </Provider>, 
document.getElementById('root'));

registerServiceWorker();
