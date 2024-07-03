const $ = document;

const form = $.querySelector("form");
const firstname = $.querySelector("#firstname");
const lastname = $.querySelector("#lastname");
const email = $.querySelector("#email");

const clearForm = () => {
  firstname.value = "";
  lastname.value = "";
  email.value = "";
};

export { form, firstname, lastname, email, clearForm };
