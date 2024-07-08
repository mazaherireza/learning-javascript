const calculateExpirationDate = (days = 100) => {
  const date = new Date();
  // days * 24h * 60min * 60S * 1_000
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1_000);
  return date;
};

export { calculateExpirationDate };
