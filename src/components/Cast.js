import useFetch from "../utils/helpers/useFetch";
import "../styles/CastInfo.css";
import { apiKey } from "../utils/constants/api-key";
import { profileBasePath,baseURL } from "../utils/constants/urls";
import noImage from "../assets/img/no-image.jpg";
import { Link } from "react-router-dom";
import {CircularProgress,Alert} from '@mui/material';

export default function Cast(props) {
  let url = `${baseURL}/${props.category}/${props.id}/credits?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />
  if (error) return <Alert severity="error">{error}</Alert>

  return (
    isDataAvailable &&
    data.cast.slice(0, 8).map((person) => {
      return (

          <Link to={`/person/${person.id}`}>
        <div className="card-container">
          <img src={person.profile_path ?profileBasePath + person.profile_path : noImage} style={{maxHeight:"150px",width:"auto"}} alt="person profile" />
          <div className="cast-description">
            <div className="cast-name">{person.name}</div>
            <div className="cast-role">{person.character}</div>
          </div>
        </div>
          </Link>

      );
    })
  );
}
