import "../styles/Movies.css";
import useFetch from "../utils/helpers/useFetch";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import { Pagination } from "@mui/material";
import { apiKey } from "../utils/constants/api-key";
import { useState } from "react";
import TVCard from "../components/TVCard";
import { Helmet } from "react-helmet";
import { baseURL } from "../utils/constants/urls";
import { CircularProgress, Alert } from "@mui/material";
import GenreSelectorTV from "../components/GenreSelectorTV";

export default function TV() {
  let [page, setPage] = useState(1);
  let handleChange = (e,value) => setPage(value);

  let [sort, setSort] = useState("popularity.desc");
  let handleSort = (e,value) => setSort(e.target.value);

  let params = useParams();

  let [genre, setGenre] = useState(params.genre);
  let handleGenre = (e) => setGenre(e.target.value);

  //Get date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  let url = `${baseURL}/discover/tv?language=en-US&sort_by=${sort}&with_genres=${genre}&first_air_date.lte=${today}&page=${page}&api_key=${apiKey}&vote_count.gte=500`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      <Helmet>
        <title>TV</title>
      </Helmet>
      <Search />
      <div className="container">
        <h2 className="page-title">TV</h2>
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
                sort === "first_air_date.desc" ? "button-selected" : ""
              }`}
              value="first_air_date.desc"
              onClick={handleSort}
            >
              Release Date
            </button>
          </div>
          <GenreSelectorTV handleGenre={handleGenre} value={genre} />
        </div>
        <div className="cards-container">
          {isDataAvailable &&
            data.results.map((movie) => {
              return (
                <TVCard
                  name={movie.name}
                  year={movie.first_air_date.slice(0, 4)}
                  overview={movie.overview}
                  rating={movie.vote_average * 10}
                  poster={movie.poster_path}
                  genre1={movie.genre_ids[0]}
                  genre2={movie.genre_ids[1]}
                  id={movie.id}
                  group="tv"
                  key={movie.id}
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
