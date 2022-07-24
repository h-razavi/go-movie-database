import '../styles/CastInfo.css'
import propic from '../assets/img/bsAnEFgVm5kn8DbBZKfnlLNll89.jpg'

export default function CastInfo(){
    return(
    <div className='card-container'>
        <img src={propic} height='150px'/>
        <div className='cast-description'>
            <div className='cast-name'>Karl Urban</div>
            <div className='cast-role'>Jacob Holland (voice)</div>
        </div>
    </div>
    )
}