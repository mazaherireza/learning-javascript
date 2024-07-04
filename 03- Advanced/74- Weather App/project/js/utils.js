const KelvinToCelsius = (temp) => Math.floor(temp - 273.15);

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satursday",
];

const fullDate = () => {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const weekDay = now.getDay();
  return `${WEEKDAYS[weekDay]} ${day} ${MONTHS[month]} ${year}`;
};

export { KelvinToCelsius, fullDate };
