import useFetch from "../utils/helpers/useFetch";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { apiKey } from "../utils/constants/api-key";
import { baseURL } from "../utils/constants/urls";
import {CircularProgress,Alert} from '@mui/material';
import { useState } from "react";


export default function Trailer(props){

let [modal,setModal] = useState(false);   

let url = `${baseURL}/${props.group}/${props.id}/videos?api_key=${apiKey}&language=en-US`
const { data, loading, error } = useFetch(url)
let isDataAvailable = !loading && !error && !!data;

if (loading) return <CircularProgress />
if (error) return <Alert severity="error">{error}</Alert>

let toggleModal = ()=>{
    setModal(!modal);
}





return(isDataAvailable&&
    data.results.map((video)=>{
        if (video.name === 'Main Trailer' || video.name === 'Official Trailer' || video.name === 'Final Trailer' ){
            return (
                    <div key={video.id}>
                    {modal &&
                    <div className="trailer-wrapper" onClick={toggleModal}><iframe id="trailer" src={'https://www.youtube.com/embed/'+video.key} title={video.name}></iframe></div>
                    }   
                    <div className="trailer" >
                    <PlayCircleOutlineIcon /><b onClick={toggleModal}>Watch Trailer</b>
                    </div>
                    </div>
            )
        }
    })
    
    )

}

