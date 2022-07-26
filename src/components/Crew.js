import useFetch from "../utils/helpers/useFetch"
import '../styles/CastInfo.css'
import { apiKey } from "../utils/constants/api-key"

export default function Crew(props){
    let url = `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=${apiKey}&language=en-US`
    let profileBasePath = 'http://image.tmdb.org/t/p/w185'
    const { data, loading, error } = useFetch(url)
    let isDataAvailable = !loading && !error && !!data;

    if (loading) return console.log('loading');
    if (error) return console.log(error);

    return(isDataAvailable &&
        data.crew.map((person)=>{
            if (person.job==='Director' || person.job==='Producer' || person.job==='Director of Photography' || person.job==='Original Music Composer' || person.job==='Writer'){
                return (
                    <div className='card-container'>
                    <img src={profileBasePath+person.profile_path} height='150px'/>
                    <div className='cast-description'>
                        <div className='cast-name'>{person.name}</div>
                        <div className='cast-role'>{person.job}</div>
                    </div>
                </div>
                   )
            }

        })
        )
}