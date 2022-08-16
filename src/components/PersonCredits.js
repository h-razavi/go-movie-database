import useFetch from "../utils/helpers/useFetch";
import { useParams } from "react-router-dom";
import { apiKey } from "../utils/constants/api-key";
import Card from "./Card";
import { baseURL } from "../utils/constants/urls";
import {CircularProgress,Alert} from '@mui/material';

export default function PersonCredits(){
    let {id} = useParams();
    let url = `${baseURL}/person/${id}/combined_credits?api_key=${apiKey}&language=en-US`;
    const { data, loading, error } = useFetch(url);
    let isDataAvailable = !loading && !error && !!data;

    if (loading) return <CircularProgress />
    if (error) return <Alert severity="error">{error}</Alert>

    return(isDataAvailable &&
        data.cast.slice(0,10).map(person=>{
           return <Card title={person.title || person.name} overview={person.overview} rating={Math.floor(person.vote_average*10)} poster={person.poster_path}
            genre1={person.genre_ids[0]}
            genre2={person.genre_ids[1]}
            id={person.id} category='movies' group={'movie'&&'tv'} />
        })

    )
}