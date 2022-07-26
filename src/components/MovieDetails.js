import '../styles/MovieDetails.css'
import { useParams } from 'react-router-dom';
import useFetch from '../utils/helpers/useFetch'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MovieInfo from './MovieInfo'
import Genre from './Genre'
import convertTime from '../utils/functions/convertTime'
import Trailer from './Trailer'
import { apiKey } from '../utils/constants/api-key';

export default function MovieDetails(){
    let param = useParams();
    let url = `https://api.themoviedb.org/3/movie/${param.id}?api_key=${apiKey}&language=en-US`
    const { data, loading, error } = useFetch(url)
    let isDataAvailable = !loading && !error && !!data;

    if (loading) return console.log('loading');
    if (error) return console.log(error);


    let posterBasePath = 'http://image.tmdb.org/t/p/w342'
    let bdBasePath = 'http://image.tmdb.org/t/p/original'

    return(isDataAvailable &&
        <>
        <img src={bdBasePath+data.backdrop_path}  className='backdrop'/>
        <section className='top-section'>
        <img src={posterBasePath+data.poster_path} className='poster' />
        <div className='top-info'>
        <h2>{data.title} ({data.release_date.slice(0,4)})</h2>
        <div className='genres'>{data.genres.map(gen=><Genre id={gen.id} />) }</div>
        <div className='tagline'>"{data.tagline}"</div>
        <div className='score-trailer'><div className='runtime'><AccessTimeIcon />{convertTime(data.runtime)}</div><div><b>User Score</b>: {Math.floor(data.vote_average*10)}%</div>
        <Trailer id={param.id} />
        </div>
        <div className='overview'>
            <h4>Overview</h4>
            <p>{data.overview}</p>
        </div>

        </div>
        </section>
        <section className='info-section'>
           <MovieInfo id={param.id} /> 
        </section>
        </>
    )

    //<Genre id={data.genres[0].id}/> &#9679; <Genre id={data.genres[1].id}/> &#9679; <Genre id={data.genres[2].id}/>
}