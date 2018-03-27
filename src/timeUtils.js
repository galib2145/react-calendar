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

export { 
  getDateConstructFromJSDate, 
  getMonthYearStrFromDateConstruct, 
  compareDatesWithoutTime,
  getNextMonthYear,
  getPrevMonthYear,
};
