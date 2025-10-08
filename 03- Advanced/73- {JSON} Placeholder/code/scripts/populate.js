const $ = document;

const _userId = $.querySelector("#user-id");
const _id = $.querySelector("#id");
const _title = $.querySelector("#title");

const populateJSON = ({ userId, id, title }) => {
  _userId.innerHTML = userId;
  _id.innerHTML = id;
  _title.innerHTML = title;
};

export { populateJSON };
