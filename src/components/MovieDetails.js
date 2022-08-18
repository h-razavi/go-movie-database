import "../styles/MovieDetails.css";
import { useParams } from "react-router-dom";
import useFetch from "../utils/helpers/useFetch";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MovieInfo from "./MovieInfo";
import Genre from "./Genre";
import convertTime from "../utils/functions/convertTime";
import Trailer from "./Trailer";
import { apiKey } from "../utils/constants/api-key";
import { Helmet } from "react-helmet";
import { baseURL, bdBasePath, posterBasePath } from "../utils/constants/urls";
import noBackdrop from "../assets/img/no-backdrop.png";
import noPoster from "../assets/img/no-poster.png";
import { CircularProgress, Alert } from "@mui/material";

export default function MovieDetails() {
  let param = useParams();
  let url = `${baseURL}/movie/${param.id}?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    isDataAvailable && (
      <>
        <Helmet>
          <title>
            {data.title} ({data.release_date.slice(0, 4)})
          </title>
        </Helmet>
        <img
          src={
            data.backdrop_path ? bdBasePath + data.backdrop_path : noBackdrop
          }
          className="backdrop"
          alt="backrop"
        />
        <section className="top-section">
          <img
            src={
              data.poster_path ? posterBasePath + data.poster_path : noPoster
            }
            className="poster"
            alt="poster"
          />
          <div className="top-info">
            <h2>
              {data.title} ({data.release_date.slice(0, 4)})
            </h2>
            <div className="genres">
              {data.genres.map((gen) => (
                <Genre id={gen.id} group="movie" key={gen.id} />
              ))}
            </div>
            <div className="tagline">"{data.tagline}"</div>
            <div className="score-trailer">
              <div className="runtime">
                <AccessTimeIcon />
                {convertTime(data.runtime)}
              </div>
              <div>
                <b>User Score</b>: {Math.floor(data.vote_average * 10)}%
              </div>
              <Trailer id={param.id} group={"movie"} />
            </div>
            <div className="overview">
              <h4>Overview</h4>
              <p>{data.overview}</p>
            </div>
          </div>
        </section>
        <section className="info-section">
          <MovieInfo id={param.id} />
        </section>
      </>
    )
  );
}
