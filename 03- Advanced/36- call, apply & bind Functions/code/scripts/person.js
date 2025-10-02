const person = {
  firstName: "FirstName",
  lastName: "LastName",
  fullName: function (city = "Tehran", country = "Iran") {
    return `${this.firstName} ${this.lastName} from ${city}, ${country}.`;
  },
};

export { person };
