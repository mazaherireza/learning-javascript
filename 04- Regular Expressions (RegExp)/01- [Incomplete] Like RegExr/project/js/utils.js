const constructRegex = (regex) => {
  const content = regex.slice(regex.indexOf("/") + 1, regex.lastIndexOf("/"));
  const modifiers = regex.split("/").pop();
  const reg = new RegExp(content, modifiers);
  return reg;
};

export { constructRegex };
