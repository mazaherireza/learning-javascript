const $ = document;

const form = $.querySelector("form");

// Retrieve form values.
const username = $.querySelector("#username");
const password = $.querySelector("#password");
const email = $.querySelector("#email");

const resetFields = () => {
  form.reset()
};

export { form, username, password, email, resetFields}