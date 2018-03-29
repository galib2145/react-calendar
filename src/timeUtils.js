import moment from 'moment';

const getDateConstructFromJSDate = (jsDate) => {
  return {
    month: parseInt(jsDate.getMonth(), 10),
    year:  parseInt(jsDate.getFullYear(), 10),
    day: jsDate.getDate(),
  };
};

const getMonthYearStrFromDateConstruct = (dateConstruct) => {
  const date = new Date(
    dateConstruct.year,
    dateConstruct.month,
    dateConstruct.day
  );

  return moment(date).format("MMMM, YYYY");
};

const getNextMonthYear = (month, year) => {
  const lastDate = new Date(year, month + 1, 0);
  lastDate.setDate(lastDate.getDate() + 1);
  return {
    month: parseInt(lastDate.getMonth(), 10),
    year:  parseInt(lastDate.getFullYear(), 10),
  }
};

const getPrevMonthYear = (month, year) => {
  const lastDate = new Date(year, month, 1);
  lastDate.setDate(lastDate.getDate() - 1);
  return {
    month: parseInt(lastDate.getMonth(), 10),
    year:  parseInt(lastDate.getFullYear(), 10),
  }
};

const compareDatesWithoutTime = (d1, d2) => {
  if (!d1 || !d2) {
    return false;
  }

  const d1Month = parseInt(d1.getMonth(), 10);
  const d2Month = parseInt(d2.getMonth(), 10);

  const d1Year = parseInt(d1.getFullYear(), 10);
  const d2Year = parseInt(d2.getFullYear(), 10);

  const d1Day = d1.getDate();
  const d2Day = d2.getDate();

  if (d1Month === d2Month && d2Year === d1Year && d1Day === d2Day) {
    return true;
  }

  return false;
}

const getMonthDurationForCalendarView = (month, year) => {
  const firstOfMonth = new Date(year, month, 1);
  const lastOfMonth = new Date(year, month + 1, 0);

  firstOfMonth.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());
  lastOfMonth.setDate(lastOfMonth.getDate() + (6 - lastOfMonth.getDay()));

  return {
    startDate: firstOfMonth,
    endDate: lastOfMonth,
  };
};

const getWeekDataForCalendarView = (month, year) => {
    const monthInterval = getMonthDurationForCalendarView(month, year);
    console.log(monthInterval);
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
};

export { 
  getDateConstructFromJSDate, 
  getMonthYearStrFromDateConstruct, 
  compareDatesWithoutTime,
  getNextMonthYear,
  getPrevMonthYear,
  getWeekDataForCalendarView
};
