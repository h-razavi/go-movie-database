import apiKey from "./api-key";

const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
const popularTV = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
const latesTV = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`
const Genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`



export { popularMovies,Genres,upcomingMovies,popularTV,latesTV};