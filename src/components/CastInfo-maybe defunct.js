import '../styles/CastInfo.css'

export default function CastInfo(props){
    return(
    <div className='cast-container'>
        <img src={props.pic} height='150px'/>
        <div className='cast-description'>
            <div className='cast-name'>{props.name}</div>
            <div className='cast-role'>{props.role}</div>
        </div>
    </div>
    )
}