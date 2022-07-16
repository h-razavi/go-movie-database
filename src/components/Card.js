import poster from '../assets/img/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg'
import poster2 from '../assets/img/fVf4YHHkRfo1uuljpWBViEGmaUQ.jpg'
import {CardStyled} from '../styles/CardStyled'
import StarsIcon from '@mui/icons-material/Stars';

function Card() {
    return (
        <>
        <CardStyled>
            <span className='card-title'>Spy Family (2022)</span>
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
            <span className='card-bottom'><StarsIcon />65%</span>
        </CardStyled>
        </>
        
    )
}

export default Card;