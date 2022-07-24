import '../styles/MovieDetails.css'
import Navbar from "./Navbar"
import Footer from "./Footer"
import backdrop from '../assets/img/wUwizGzbTk5CTiKBnE4Pq1MONwD.jpg'
import poster from '../assets/img/9Zfv4Ap1e8eKOYnZPtYaWhLkk0d.jpg'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MovieInfo from './MovieInfo'

export default function MovieDetails(){
    return(
        <>
        <Navbar />
        <img src={backdrop}  className='backdrop'/>
        <section className='top-section'>
        <img src={poster} className='poster' />
        <div className='top-info'>
        <h2>The Sea Beast (2022)</h2>
        <div>Animation &#9679; Adventure &#9679; Family &#9679; Fantasy </div>
        <div className='tagline'>"Hit the high seas."</div>
        <div className='score-trailer'><div className='runtime'><AccessTimeIcon />1h 55m</div><div><b>User Score</b>: 76%</div>
        <div className='trailer'><PlayCircleOutlineIcon /><b>Watch Trailer</b></div>
        </div>
        <div className='overview'>
            <h4>Overview</h4>
            <p>The life of a legendary sea monster hunter is turned upside down when a young girl stows away on his ship.</p>
        </div>

        </div>
        </section>
        <section className='info-section'>
           <MovieInfo /> 
        </section>
        <Footer />
        </>
    )
}