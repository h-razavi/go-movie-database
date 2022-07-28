import useFetch from "../utils/helpers/useFetch"
import '../styles/CastInfo.css'
import { apiKey } from "../utils/constants/api-key"
import noImage from '../assets/img/no-image.jpg'

export default function Cast(props){
    let url = `https://api.themoviedb.org/3/${props.category}/${props.id}/credits?api_key=${apiKey}&language=en-US`
    let profileBasePath = 'http://image.tmdb.org/t/p/w185'
    const { data, loading, error } = useFetch(url)
    let isDataAvailable = !loading && !error && !!data;

    if (loading) return console.log('loading');
    if (error) return console.log(error);

    return(isDataAvailable &&
        data.cast.slice(0,8).map((person)=>{
           return (
            <div className='card-container'>
            <img src={profileBasePath+person.profile_path} height='150px' onError={event=>{event.target.src={noImage}}}/>
            <div className='cast-description'>
                <div className='cast-name'>{person.name}</div>
                <div className='cast-role'>{person.character}</div>
            </div>
        </div>
           )
        })
        )
}