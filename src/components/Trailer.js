import useFetch from "../utils/helpers/useFetch";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { apiKey } from "../utils/constants/api-key";



export default function Trailer(props){
let url = `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=${apiKey}&language=en-US`
const { data, loading, error } = useFetch(url)
let isDataAvailable = !loading && !error && !!data;



return(isDataAvailable&&
    data.results.map((video)=>{
        if (video.name === 'Main Trailer' || video.name === 'Official Trailer' ){
            return (
                    <div className="trailer">
                    <PlayCircleOutlineIcon /><a href={'https://youtu.be/'+video.key}><b>Watch Trailer</b></a>
                    </div>
            )
        }
    })
    
    )

}

