import '../styles/Search.css'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { textTransform } from '@mui/system';

export default function Search () {
    return (
        <div className='search'>
            <h2>Search for thousands of Movies, TV series and much more</h2>
            <SearchIcon  sx={{position: 'relative', top:'16px', fontSize:'3rem'}}/>
            <input type={'text'} placeholder="Find Your Next Watch"></input>
            <Button variant='contained' sx={{ fontSize:'1.5rem', margin:'1.5rem auto', position:'relative', bottom:'4px', borderRadius:'1.5rem', boxShadow:'none', display:'block', textAlign:'center', textTransform:'none'}}>Show Me!</Button>
        </div>
    )
}