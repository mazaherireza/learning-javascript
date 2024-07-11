const $ = document;
const input = $.querySelector('input[type="text"]');
const form = $.querySelector("form");

const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

form.onsubmit = (event) => {
  event.preventDefault();
  if (regex.test(input.value)) {
    // OK
  }
};
