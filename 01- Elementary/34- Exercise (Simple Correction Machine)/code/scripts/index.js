const questions = [
  {
    id: "QA_1001",
    title: `
    In Johannesburg most people ............ at least five languages.
    a. speak
    b. are speaking
    `,
    answer: "a",
    weight: 1,
  },
  {
    id: "QA_1002",
    title: `
    "............ painting the bedroom yet?"
    "Not, yet. I'll finish it tomorrow."
    a. Did you finish
    b. Have you finished 
    `,
    answer: "b",
    weight: 2,
  },
  {
    id: "QA_1003",
    title: `
    "Mum, where is ............ dog? I want to take it to ............ park."
    a. the, -
    b. the, the
    `,
    answer: "b",
    weight: 1,
  },
];

// User's Score
let usersScore = 0;
// User's Answer
let usersAnswer = "I don't know!";

questions.forEach((question) => {
  usersAnswer = prompt(question.title);

  if (usersAnswer === question.answer) {
    usersScore += question.weight;
  }
});

console.log(`Your score is: ${usersScore}`);
