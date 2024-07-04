import { indefiniteArticle } from "./utils.js";

class Person {
  constructor(firstname, lastname, occupation, hometown) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.occupation = occupation;
    this.hometown = hometown;
  }

  fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  introduce() {
    return `Hello, I'm ${this.fullname()}, I'm ${indefiniteArticle(
      this.occupation
    )} ${this.occupation}.`;
  }
}

class Professor extends Person {
  constructor(firstname, lastname, occupation, hometown, department, courses) {
    super(firstname, lastname, occupation, hometown);
    this.department = department;
    this.courses = [...courses];
  }

  representation() {
    return `I can teach ${this.courses.join(", ")}.`;
  }
}

const friend = new Person("Yousef", "Amini", "Fullstack Developer", "Isfahan");
console.log(friend.introduce());

const professor = new Professor(
  "Hassan",
  "Khotanlou",
  "Professor",
  "Hamedan",
  "Computer Engineering",
  [
    "Data Structure",
    "Computer Architecture",
    "Image Processing",
    "Artificial Engineering",
  ]
);

console.log(professor.introduce());
console.log(professor.representation());
