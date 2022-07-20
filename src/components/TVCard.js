import {CardStyled} from '../styles/CardStyled'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Genre from './Genre';



function TVCard(props) {
    let posterBasePath = 'http://image.tmdb.org/t/p/w342'
    return (
        <>
        <CardStyled>
            <span className='card-title'>{props.name} {props.year}</span>
           <div className='img-container'> <a href='#'><img src={posterBasePath+props.poster} height='300px' width='200px'/><div className='card-info'>
                <h4>Overview</h4>
                <p>{props.overview}</p>                
                <div className='genres'> <Genre id={props.genre1} /> <Genre id={props.genre2} />  </div>
                </div></a>

                </div>
            <span className='card-bottom'><CircularProgressbar value={props.rating} text={props.rating+'%'} /></span>
        </CardStyled>
        {/* <CardStyled>
            <span className='card-title'> Once Upon a Time in America 1984</span>
           <div className='img-container'> <a href='#'><img src={poster} height='300px' width='200px'/><div className='card-info'>
                <h4>Overview</h4>
                <p>Master spy Twilight is the best at what he does when it comes to going undercover on dangerous missions in the name of a better world. But when he receives the ultimate impossible assignment—get married and have a kid—he may finally be in over his head! Not one to depend on others, Twilight has his work cut out for him procuring both a wife and a child for his mission to infiltrate an elite private school. What he doesn't know is that the wife he's chosen is an assassin and the child he's adopted is a telepath!</p>                
                <div className='genres'> <a href='*'>Animation</a> <a href='*'>Action</a> </div>
                </div></a>

                </div>
            <span className='card-bottom'><StarsIcon />98%</span>
        </CardStyled>
        <CardStyled>
            <span className='card-title'>Hustle (2022)</span>
           <div className='img-container'> <a href='#'><img src={poster2} height='300px' width='200px'/><div className='card-info'>
                <h4>Overview</h4>
                <p>After discovering a once-in-a-lifetime player with a rocky past abroad, a down on his luck basketball scout takes it upon himself to bring the phenom to the States without his team's approval. Against the odds, they have one final shot to prove they have what it takes to make it in the NBA.</p>                
                <div className='genres'> <a href='*'>Comedy</a> <a href='*'>Drama</a> </div>
                </div></a>

                </div>
            <span className='card-bottom'><CircularProgressbar value={66} text={'66%'} /></span>
        </CardStyled> */}
        </>
        
    )
}

export default TVCard;
