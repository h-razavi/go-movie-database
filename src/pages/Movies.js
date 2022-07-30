import '../styles/Movies.css'
import useFetch from '../utils/helpers/useFetch';
import Search from '../components/Search';
import { Pagination } from '@mui/material';
import { apiKey } from '../utils/constants/api-key';
import { useState,useEffect } from 'react';
import Card from '../components/Card';

export default function Movies(){
    let [page,setPage] = useState(1);
    let handleChange = (e,value)=>setPage(value)

    let url=`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    const { data, loading, error } = useFetch(url)
    let isDataAvailable = !loading && !error && !!data;
  
    if (loading) return console.log('loading');
    if (error) return console.log(error);

    return (
        <>
        <Search />
        <div className='container'>
        <h2 className='page-title'>Movies</h2>
        <div className='card-container'>
        {isDataAvailable &&
        data.results.map((movie)=>{
            return <Card title={movie.title} year={movie.release_date.slice(0,4)} overview={movie.overview} rating={movie.vote_average*10} poster={movie.poster_path}
            genre1={movie.genre_ids[0]}
            genre2={movie.genre_ids[1]}
            id={movie.id}
            category='movies'
          />
        })
        
        }
        </div>

        <div className='pagination'><Pagination count={20} variant="outlined" color="primary" size='large' onChange={handleChange} value={page} page={page}  /></div>
        
        </div>
        </>
    )
}