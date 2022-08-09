import useFetch from "../utils/helpers/useFetch";
import { Genres } from '../utils/constants/urls';
import {CircularProgress,Alert} from '@mui/material';


function Genre(props){
    const { data, loading, error } = useFetch(Genres)
    let isDataAvailable = !loading && !error && !!data;

    if (loading) return <CircularProgress />
    if (error) return <Alert severity="error">{error}</Alert>

  
    return (
        <>
      {isDataAvailable &&
        data.genres.map((genre) => {
            if (genre.id===props.id){
                return <a href="#">{genre.name}</a>
            }         
        })}

        </>
    )
}

export default Genre;