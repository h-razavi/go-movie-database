import "../styles/Movies.css";
import useFetch from "../utils/helpers/useFetch";
import Search from "../components/Search";
import { Pagination } from "@mui/material";
import { apiKey } from "../utils/constants/api-key";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import GenreSelector from "../components/GenreSelector";
import { Helmet } from "react-helmet";

export default function Movies() {
  let [page, setPage] = useState(1);
  let handleChange = (e, value) => setPage(value);

  let [sort, setSort] = useState("popularity.desc");
  let handleSort = (e, value) => setSort(e.target.value);

  let [genre, setGenre] = useState("");
  let handleGenre = (e, value) => setGenre(e.target.value)

  

//Get date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sort}&with_genres=${genre}&release_date.lte=${today}&page=${page}`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return console.log("loading");
  if (error) return console.log(error);

  return (
    <>
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <Search />
      <div className="container">
        <h2 className="page-title">Movies</h2>
        <div className="sort-by">
          <div>
            <h4>Sort by:</h4>
            <button
              className={`sort-factor ${
                sort === "popularity.desc" ? "button-selected" : ""
              }`}
              value="popularity.desc"
              onClick={handleSort}
            >
              Popularity
            </button>
            <button
              className={`sort-factor ${
                sort === "vote_average.desc" ? "button-selected" : ""
              }`}
              value="vote_average.desc"
              onClick={handleSort}
            >
              User Rating
            </button>
            <button
              className={`sort-factor ${
                sort === "release_date.desc" ? "button-selected" : ""
              }`}
              value="release_date.desc"
              onClick={handleSort}
            >
              Release Date
            </button>
          </div>
          <GenreSelector handleGenre={handleGenre} value={genre} />
        </div>
        <div className="card-container">
          {isDataAvailable &&
            data.results
              .map((movie) => {
                return (
                  <Card
                    title={movie.title}
                    year={movie.release_date.slice(0, 4)}
                    overview={movie.overview}
                    rating={movie.vote_average * 10}
                    poster={movie.poster_path}
                    genre1={movie.genre_ids[0]}
                    genre2={movie.genre_ids[1]}
                    id={movie.id}
                    category="movies"
                  />
                );
              })}
        </div>

        <div className="pagination">
          <Pagination
            count={20}
            variant="outlined"
            color="primary"
            size="large"
            onChange={handleChange}
            value={page}
            page={page}
          />
        </div>
      </div>
    </>
  );
}
