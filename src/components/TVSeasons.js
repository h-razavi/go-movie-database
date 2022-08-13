import "../styles/TVSeasons.css";
import useFetch from "../utils/helpers/useFetch";
import { apiKey } from "../utils/constants/api-key";
import convertTime from "../utils/functions/convertTime";
import { useParams } from "react-router-dom";
import noPoster from "../assets/img/no-poster.png";
import noStill from "../assets/img/no-still.png";
import { baseURL,posterBasePath,stillBasePath } from "../utils/constants/urls";
import {CircularProgress,Alert} from '@mui/material';

export default function TVSeasons() {
  let params = useParams();
  console.log(params.num);
  let url = `${baseURL}/tv/${params.id}/season/${params.num}?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />
  if (error) return <Alert severity="error">{error}</Alert>

    //Get date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
  
    today = yyyy + "-" + mm + "-" + dd;


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
                <p>{episode.air_date<today?episode.overview:"To Be Aired"}</p>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}
