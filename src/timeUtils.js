import moment from 'moment';

const getDateConstructFromJSDate = (jsDate) => {
  return {
    month: parseInt(jsDate.getMonth(), 10),
    year:  parseInt(jsDate.getYear()),
    day: jsDate.getDay(),
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

export { getDateConstructFromJSDate, getMonthYearStrFromDateConstruct };
