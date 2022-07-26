import '../styles/CastInfo.css'
import propic from '../assets/img/bsAnEFgVm5kn8DbBZKfnlLNll89.jpg'

export default function CastInfo(props){
    return(
    <div className='card-container'>
        <img src={props.pic} height='150px'/>
        <div className='cast-description'>
            <div className='cast-name'>{props.name}</div>
            <div className='cast-role'>{props.role}</div>
        </div>
    </div>
    )
}