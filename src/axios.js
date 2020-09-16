import axios from "axios";

/* Creating an instance of axios with the baseURL as a custom 
config to make request to the movie database */
const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
});

export default instance;
