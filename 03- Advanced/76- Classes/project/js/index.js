class Person {
  constructor(firstname, lastname, occupation, hometown) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.occupation = occupation;
    this.hometown = hometown;
  }
}

const friend = new Person("Yousef", "Amini", "Fullstack Developer", "Isfahan");
console.log(`${friend.firstname}, from ${friend.hometown}`);
