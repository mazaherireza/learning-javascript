import { developers } from "./developers.js";

const INDEX = 0;
const developer = developers[INDEX];

const INTERVAL = 1_000;
const person = {
  firstName: "FirstName",
  lastName: "LastName",
  fullName: function (city = "Tehran", country = "Iran") {
    // When a function is used as a callback, "this" is lost. <----------------- ***
    setTimeout(
      function () {
        console.log(
          `${this.firstName} ${this.lastName} from ${city}, ${country}.`
        );
      }.bind(developer), // Preserving "this" <----------- ***
      INTERVAL
    );
  },
  displayPosition: function () {
    setTimeout(() => {
      console.log(`${this.position} Developer`);
    }, INTERVAL);
  },
};

const { city, country } = developer;
person.fullName(); // Yousef Amini from Tehran, Iran.
person.fullName.call(developer, city, country); // Yousef Amini from Tehran, Iran.
person.displayPosition(); // undefined Developer
person.displayPosition.bind(developer)(); // Fullstack Developer

/*
const person = {
  firstName: "FirstName",
  lastName: "LastName",
  fullName: function (city = "Tehran", country = "Iran") {
    setTimeout(
       () => { <---------------------- Arrow function
        console.log(
          `${this.firstName} ${this.lastName} from ${city}, ${country}.`
        );
      },
      INTERVAL
    );
  },
  displayPosition: function () {
    setTimeout(() => {
      console.log(`${this.position} Developer`);
    }, INTERVAL);
  },
};

person.fullName() <-----------  FirstName LastName from Tehran, Iran.
*/
