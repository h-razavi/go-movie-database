import useFetch from "../utils/helpers/useFetch";
import { Link } from "react-router-dom";
import "../styles/CastInfo.css";
import { apiKey } from "../utils/constants/api-key";
import noImage from "../assets/img/no-image.jpg";
import { profileBasePath,baseURL } from "../utils/constants/urls";
import {CircularProgress,Alert} from '@mui/material';

export default function Crew(props) {
  let url = `${baseURL}/${props.category}/${props.id}/credits?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />
  if (error) return <Alert severity="error">{error}</Alert>

  return (
    isDataAvailable &&
    data.crew.map((person) => {
      if (
        person.job === "Director" ||
        person.job === "Producer" ||
        person.job === "Director of Photography" ||
        person.job === "Original Music Composer" ||
        person.job === "Writer"
      ) {
        return (
          <Link to={`/person/${person.id}`}>
          <div className="card-container">
            <img
              src={person.profile_path ?profileBasePath + person.profile_path : noImage  }
              style={{maxHeight:"150px",width:"auto"}}
              alt="person profile"
            />
            <div className="cast-description">
              <div className="cast-name">{person.name}</div>
              <div className="cast-role">{person.job}</div>
            </div>
          </div>
          </Link>
        );
      }
    })
  );
}
