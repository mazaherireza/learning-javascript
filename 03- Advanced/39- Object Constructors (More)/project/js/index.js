function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  
  this.setFirstName = function (firstName) {
    this.firstName = firstName;
  };
  this.getFullname = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const friend = new Person("Valentine", "Amini", 25);

friend.setFirstName("Yousef");
console.log(friend.getFullname()); // Implicit Binding (Using .)
