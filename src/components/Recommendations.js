import useFetch from "../utils/helpers/useFetch"
import Card from "./Card";
import { apiKey } from "../utils/constants/api-key";


export default function Recommendations(props){
let url = `https://api.themoviedb.org/3/${props.category}/${props.id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
const { data, loading, error } = useFetch(url)
let isDataAvailable = !loading && !error && !!data;

if (loading) return console.log('loading');
if (error) return console.log(error);

    return(isDataAvailable &&
        data.results.slice(0,6).map((movie)=>{
            return <Card title={movie.title || movie.original_name} overview={movie.overview} rating={Math.floor(movie.vote_average*10)} poster={movie.poster_path}
            genre1={movie.genre_ids[0]}
            genre2={movie.genre_ids[1]}
            id={movie.id} />
        })
        )
}