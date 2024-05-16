// The URLSearchParams interface defines utility methods ot work with the query string of a URL.

const parameters = new URLSearchParams(location.search);
const idParameter = parameters.get("id");
