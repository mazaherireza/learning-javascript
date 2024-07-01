const promise = new Promise((resolve, reject) => {
  const programmingLanguage = "JavaScript";
  const CHAR = "S";
  for (let ch of programmingLanguage) {
    console.log(ch);
    if (ch == CHAR) {
      resolve("Success"); // PromiseResult: "Success"
      // Why iteration didn't terminate? <---------- ***
    }
  }
  reject("Error");
});

console.log(promise);

promise
  .then((response) => {
    console.log(response);
    return `*${response}*`;
  })
  .then((response) => {
    console.log(response);
    return `*${response}*`;
  })
  .then((response) => {
    console.log(response);
  });
