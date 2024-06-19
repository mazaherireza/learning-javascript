import { developers } from "./developrs.js";

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

person.fullName.call(developer, developer.city, developer.country);
person.displayPosition.bind(developer)();

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
