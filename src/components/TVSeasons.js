import "../styles/TVSeasons.css";
import useFetch from "../utils/helpers/useFetch";
import { apiKey } from "../utils/constants/api-key";
import convertTime from "../utils/functions/convertTime";
import { useParams } from "react-router-dom";
import noPoster from "../assets/img/no-poster.png";
import noStill from "../assets/img/no-still.png";

export default function TVSeasons() {
  let params = useParams();
  console.log(params.num);
  let url = `https://api.themoviedb.org/3/tv/${params.id}/season/${params.num}?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  let posterBasePath = "http://image.tmdb.org/t/p/w342";
  let stillBasePath = "http://image.tmdb.org/t/p/w300";

  return (
    isDataAvailable && (
      <div className="container">
        <h2 className="season-title">{data.name}</h2>
        <div className="top-container">
          <img
            src={
              data.poster_path ? posterBasePath + data.poster_path : noPoster
            }
            height="300px"
            alt="season poster"
          />
          <p>{data.overview}</p>
        </div>
        {data.episodes.map((episode) => {
          return (
            <div className="episode-card">
              <img
                src={
                  episode.still_path
                    ? stillBasePath + episode.still_path
                    : noStill
                }
                alt="episode still image"
              />
              <div className="espidoe-details">
                <div className="episode-left">
                  {" "}
                  <h3>Episode {episode.episode_number}</h3>
                  <span style={{ fontSize: "1.2rem" }}>{episode.name}</span>
                  <div>
                    <b>Air Date: </b>
                    <span>{episode.air_date}</span>
                  </div>
                  <div>
                    <b>Runtime: </b> <span>{convertTime(episode.runtime)}</span>
                  </div>
                  <div>
                    <b>User Score: </b>{" "}
                    <span>{Math.floor(episode.vote_average * 10)}%</span>
                  </div>
                </div>
                <p>{episode.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}
