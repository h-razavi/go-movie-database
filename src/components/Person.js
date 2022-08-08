import "../styles/Person.css";
import { useParams } from "react-router-dom";
import useFetch from "../utils/helpers/useFetch";
import { Helmet } from "react-helmet";
import { apiKey } from "../utils/constants/api-key";
import PersonCredits from "./PersonCredits";

export default function Person() {
    let {id} = useParams();
    let url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`;
    const { data, loading, error } = useFetch(url);
    let isDataAvailable = !loading && !error && !!data;

    if (loading) return console.log("loading");
    if (error) return console.log(error);

    let profileBasePath = 'https://image.tmdb.org/t/p/w185'


  return (
    isDataAvailable && (
    <>
    <Helmet><title>{data.name}</title></Helmet>
    <div className="container">
      <div className="profile">
        <img src={profileBasePath+data.profile_path} style={{minWidth:'200px'}}/>
        <div className="person-info">
          <h2 className="person-name">{data.name}</h2>
          <div>
            <b>Birthday: </b>
            <span style={{ color: "var(--secondary-text)" }}>{data.birthday}</span>
          </div>
          <div>
            <b>Place of Birth: </b>
            <span style={{ color: "var(--secondary-text)" }}>
              {data.place_of_birth}
            </span>
          </div>
          <p>{data.biography}</p>
        </div>
      </div>
      <h3 className="featured">Featured in:</h3>
      <section className="person-movies">
        <PersonCredits />
      </section>
    </div>
    </>
    )
  );
}
