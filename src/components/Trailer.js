import useFetch from "../utils/helpers/useFetch";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { apiKey } from "../utils/constants/api-key";
import { baseURL } from "../utils/constants/urls";
import {CircularProgress,Alert} from '@mui/material';


export default function Trailer(props){
let url = `${baseURL}/movie/${props.id}/videos?api_key=${apiKey}&language=en-US`
const { data, loading, error } = useFetch(url)
let isDataAvailable = !loading && !error && !!data;

if (loading) return <CircularProgress />
if (error) return <Alert severity="error">{error}</Alert>



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

