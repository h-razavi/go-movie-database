import "../styles/Person.css";
import { useParams } from "react-router-dom";
import useFetch from "../utils/helpers/useFetch";
import { Helmet } from "react-helmet";
import { apiKey } from "../utils/constants/api-key";
import PersonCredits from "./PersonCredits";
import { baseURL, profileBasePath } from "../utils/constants/urls";
import { CircularProgress, Alert } from "@mui/material";

export default function Person() {
  let { id } = useParams();
  let url = `${baseURL}/person/${id}?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    isDataAvailable && (
      <>
        <Helmet>
          <title>{data.name}</title>
        </Helmet>
        <div className="container">
          <div className="profile">
            <img src={profileBasePath + data.profile_path} alt='profile' />
            <div className="person-info">
              <h2 className="person-name">{data.name}</h2>
              <div>
                <b>Birthday: </b>
                <span style={{ color: "var(--secondary-text)" }}>
                  {data.birthday}
                </span>
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
