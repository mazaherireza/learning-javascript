let minute = +prompt("Enter minute: ");
let second = +prompt("Enter second: ");
second++;

const timer = setInterval(() => {
  if (second === 0) {
    if (minute !== 0) {
      second = 59;
      minute--;
    }
  } else {
    second--;
  }
  if (minute === 0 && second === 0) {
    clearInterval(timer);
  }
  console.log(`${minute} : ${second}`);
}, 1000);
