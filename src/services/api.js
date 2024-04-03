import axios from "axios";

//https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=b7c397b7ac9d3e5014089c2e9458f2b6&page=10

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
