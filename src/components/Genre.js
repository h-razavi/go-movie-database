import useFetch from "../utils/helpers/useFetch";
import { baseURL } from '../utils/constants/urls';
import { apiKey } from "../utils/constants/api-key";
import {CircularProgress,Alert} from '@mui/material';
import {Link} from 'react-router-dom'


function Genre(props){
    let url = `${baseURL}/genre/${props.group}/list?api_key=${apiKey}`
    const { data, loading, error } = useFetch(url)
    let isDataAvailable = !loading && !error && !!data;

    if (loading) return <CircularProgress />
    if (error) return <Alert severity="error">{error}</Alert>

  
    return (
        <>
      {isDataAvailable &&
        data.genres.map((genre) => {
            if (genre.id===props.id){
                return <Link to={`/${props.group==="movie"?"movies":"tv"}/genre=${genre.id}`} key={genre.id}>{genre.name}</Link> 
            }         
        })}

        </>
    )
}

export default Genre;