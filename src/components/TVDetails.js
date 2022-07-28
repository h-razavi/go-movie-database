import "../styles/MovieDetails.css";
import "../styles/TVDetails.css";
import { useParams } from "react-router-dom";
import useFetch from "../utils/helpers/useFetch";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TVInfo from "./TVInfo";
import Genre from "./Genre";
import convertTime from "../utils/functions/convertTime";
import Trailer from "./Trailer";
import { apiKey } from "../utils/constants/api-key";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Helmet} from "react-helmet";

export default function TVDetails() {
  let url = `https://api.themoviedb.org/3/tv/1399?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return console.log("loading");
  if (error) return console.log(error);

  let posterBasePath = "http://image.tmdb.org/t/p/w342";
  let bdBasePath = "http://image.tmdb.org/t/p/original";
  let logoBasePath = "https://image.tmdb.org/t/p/w45";

  return (
    isDataAvailable && (
      <>
      <Helmet><title>{data.title}</title></Helmet>
        <img src={bdBasePath + data.backdrop_path} className="backdrop" />
        <section className="top-section">
          <img src={posterBasePath + data.poster_path} className="poster" />
          <div className="top-info">
            <h2>
              {data.original_name} ({data.first_air_date.slice(0, 4)})
            </h2>
            <div className="genres">
              {data.genres.map((gen) => (
                <Genre id={gen.id} />
              ))}
            </div>
            <div className="tagline">"{data.tagline}"</div>
            <div className="additional-info">
              {" "}
              <a href={data.homepage}>
                <img
                  src={logoBasePath + data.networks[0].logo_path}
                  className="network-logo"
                />
              </a>
              <b>Status:</b> {data.status}
            </div>
            <div>Creators : {data.created_by.map(p=><b style={{marginRight:'48px'}}>{p.name}</b>)}</div>
            <div className="score-trailer">
              <div className="runtime">
                <AccessTimeIcon />
                {convertTime(data.episode_run_time)}
              </div>
              <div>
                <b>User Score</b>: {Math.floor(data.vote_average * 10)}%
              </div>
            </div>
            <div className="overview">
              <h4>Overview</h4>
              <p>{data.overview}</p>
            </div>
            <button className="seasons-link">Seasons and Episodes Details<ArrowForwardIosIcon /></button>
          </div>
        </section>
        <section className='info-section'>
           <TVInfo id='1399' /> 
        </section>
      </>
    )
  );
}
