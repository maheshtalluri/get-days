const addDays = require("date-fns/addDays");

const result = (days) => {
  let getDays = addDays(new Date(2020, 7, 22), days);
  return `${getDays.getDate()}-${
    getDays.getMonth() + 1
  }-${getDays.getFullYear()}`;
};

module.exports = result;
