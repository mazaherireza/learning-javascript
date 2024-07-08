const calculateExpirationDate = (days = 100, tense = "Future") => {
  const date = new Date();
  // days * 24h * 60min * 60S * 1_000
  const exdays = days * 24 * 60 * 60 * 1_000;
  if (tense == "Future") date.setTime(date.getTime() + exdays);
  else date.setTime(date.getTime() - exdays);
  return date;
};

export { calculateExpirationDate };
