const $ = document;

let _userId = $.querySelector("#user-id");
let _id = $.querySelector("#id");
let _title = $.querySelector("#title");

const populateJSON = ({ userId, id, title }) => {
  _userId.innerHTML = userId;
  _id.innerHTML = id;
  _title.innerHTML = title;
};

export { populateJSON };
