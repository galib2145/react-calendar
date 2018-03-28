import * as timeUtils from './timeUtils';

const selectedDate = (state = null, action) => {
  switch(action.type) {
    case 'SET_SELECTED_DATE':
      return action.selectedDate;
    default:
      return state;
  }
};

const monthAndYear = (state = {
  month: (new Date()).getMonth(),
  year: (new Date()).getFullYear(),
}, action) => {
  switch(action.type) {
    case 'INCREMENT_MONTH':
      return timeUtils.getNextMonthYear(state.month, state.year);
    case 'DECREMENT_MONTH':
      return timeUtils.getPrevMonthYear(state.month, state.year);
    default:
      return state;
  }
}

export { selectedDate, monthAndYear };