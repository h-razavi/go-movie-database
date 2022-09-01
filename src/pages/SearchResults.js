import "../styles/Movies.css";
import useFetch from "../utils/helpers/useFetch";
import Search from "../components/Search";
import { Pagination } from "@mui/material";
import { apiKey } from "../utils/constants/api-key";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { Helmet } from "react-helmet";
import { baseURL } from "../utils/constants/urls";
import { CircularProgress, Alert } from "@mui/material";

export default function SearchResults() {
  let [page, setPage] = useState(1);
  let handleChange = (e,value) => setPage(value);

  let params = useParams();

  let url = `${baseURL}/search/multi?api_key=${apiKey}&language=en-US&query=${params.query}&page=${page}`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      <Helmet>
        <title>Search Results</title>
      </Helmet>
      <Search />
      <div className="container">
        <h2 className="page-title">Here is What We Could Find</h2>
        <div className="cards-container">
          {isDataAvailable &&
            data.results.map((movie) => {
              return (
                <Card
                  title={movie.title || movie.name}
                  overview={movie.overview}
                  rating={movie.vote_average * 10}
                  poster={movie.poster_path}
                  id={movie.id}
                  category={movie.media_type === "movie" ? "movies" : "tv"}
                  group={movie.media_type === "movie" ? "movie" : "tv"}
                  key={movie.id}
                />
              );
            })}
        </div>
        {isDataAvailable && (
          <div className="pagination">
            <Pagination
              count={data.total_pages}
              variant="outlined"
              color="primary"
              size="large"
              onChange={handleChange}
              value={page}
              page={page}
            />
          </div>
        )}
      </div>
    </>
  );
}
