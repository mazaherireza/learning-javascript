const BASE_URL = "https://library-afb7a-default-rtdb.firebaseio.com/";

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getBooksAPI = () => {
  return apiClient.get("/books.json");
};

const postBookAPI = (book) => {
  return apiClient.post("/books.json", book);
};

const editBookAPI = (id, book) => {
  return apiClient.put(`/books/${id}.json`, book);
};

const deleteBookAPI = (id) => {
  return apiClient.delete(`/books/${id}.json`);
};

export { getBooksAPI, postBookAPI, editBookAPI, deleteBookAPI };
