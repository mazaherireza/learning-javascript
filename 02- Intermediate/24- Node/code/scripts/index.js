const log = (response) => {
  console.log(response);
};

const $ = document;
const title = $.querySelector("#playground-title");
log(title);
log(title.nodeName);
log(title.nodeType);

const id = title.getAttributeNode("id");
log(id);
log(id.nodeName);
log(id.nodeType);
