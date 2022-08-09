import {apiKey} from "./api-key";

const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
const popularTV = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
const latesTV = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`
const Genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
const baseURL = 'https://api.themoviedb.org/3'
const posterBasePath = "http://image.tmdb.org/t/p/w342";
const profileBasePath = "http://image.tmdb.org/t/p/w185";
const bdBasePath = "http://image.tmdb.org/t/p/original";
const logoBasePath = "https://image.tmdb.org/t/p/w45";
const stillBasePath = "http://image.tmdb.org/t/p/w300";


export { popularMovies,Genres,upcomingMovies,popularTV,latesTV,baseURL,posterBasePath,profileBasePath,bdBasePath,logoBasePath,stillBasePath};