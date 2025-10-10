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

const friend = new Person("Yousef", "Amini", "Fullstack Developer", "Isfahan");
console.log(friend.introduce());
