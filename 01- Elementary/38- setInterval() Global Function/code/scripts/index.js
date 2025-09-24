let minute = +prompt("Enter minute: ");
let second = +prompt("Enter second: ");

const useLeadingZero = (num) => num.toString().padStart(2, "0");

const timer = setInterval(() => {
  if (second < 0) {
    minute--;
    second = 59;
  }

  if (minute === 0 && second === 0) {
    clearInterval(timer);
  }

  console.log(`${useLeadingZero(minute)} : ${useLeadingZero(second)}`);

  second--;
}, 1_000);
