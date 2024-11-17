// The padStart() method is a string method.
// To pad a number, convert the number to a string first.

const mask = (phoneNumber, sign = "#") => {
  const START = 0;
  const END = 4;
  // 0935
  const pre = phoneNumber.substring(START, END);

  const COUNT = 8;
  const FILLING = sign;
  // 0935****
  const masked = pre.padEnd(COUNT, FILLING);

  const OFFSET = 3;
  // 902
  const last = phoneNumber.slice(-OFFSET);
  return `${masked}${last}`;
};

const phoneNumber = "09354848902";
console.log(mask(phoneNumber, "*"));
