import useFetch from "../utils/helpers/useFetch";
import { useParams } from "react-router-dom";
import { apiKey } from "../utils/constants/api-key";
import Card from "./Card";

export default function PersonCredits(){
    let {id} = useParams();
    let url = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${apiKey}&language=en-US`;
    const { data, loading, error } = useFetch(url);
    let isDataAvailable = !loading && !error && !!data;

    if (loading) return console.log("loading");
    if (error) return console.log(error);

    return(isDataAvailable &&
        data.cast.slice(0,8).map(person=>{
           return <Card title={person.title || person.name} overview={person.overview} rating={Math.floor(person.vote_average*10)} poster={person.poster_path}
            genre1={person.genre_ids[0]}
            genre2={person.genre_ids[1]}
            id={person.id} category='movies' />
        })

    )
}