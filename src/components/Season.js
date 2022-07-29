import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'


export default function Season(props){
let nums=Array.from({length: props.num},(_,i)=>i+1)
return (
    nums.map(n=>{
        return <Link to={`/tv/${props.id}/seasons/${n}`}> <Button variant='outlined' size='large' sx={{ marginRight: '24px' , marginBottom: '24px' }} >Season {n} </Button></Link>
    })
)
}