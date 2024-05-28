// The URLSearchParams interface defines utility methods to work with the query string of a URL.

//location = "https://quera.org/problemset?difficulty=EZ&tag=80"

const searchParams = new URLSearchParams(location.search);
const tagParameter = searchParams.get("tag"); // 80
// searchParams.get("dificulty"); <--------  null (mistyping! in difficulty)
