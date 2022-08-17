import "../styles/MainPageCarousel.css";
import TVCard from "./TVCard";
import useFetch from "../utils/helpers/useFetch";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css';
import {CircularProgress,Alert} from '@mui/material';


export default function TVMainPageCarousel(props) {
  //Fetching Data
  const { data, loading, error } = useFetch(props.url)
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />
  if (error) return <Alert severity="error">{error}</Alert>
  

  return (
      <div>
      <div className="dashes"><div className="dash dash1"></div><div className="dash dash2"></div><div className="dash dash3"></div><div className="dash dash4"></div></div>
      <h3 className="section-title">{props.title}</h3>
      <section className="movie-container">
      <Swiper modules={[Navigation,Pagination]} spaceBetween={0} slidesPerView={5} navigation={true} pagination={{clickable: true,type: 'none'}} loop={true}
            breakpoints={{390: {
              width: 300,
              slidesPerView: 1,
            },
            768: {
              width: 700,
              slidesPerView: 2,
            },
          }}
      >
      {isDataAvailable &&
        data.results.map((movie) => {
          return <SwiperSlide> <TVCard name={movie.name} year={movie.first_air_date.slice(0,4)} overview={movie.overview} rating={movie.vote_average*10} poster={movie.poster_path}
            genre1={movie.genre_ids[0]}
            genre2={movie.genre_ids[1]}
            id={movie.id}
            group='tv'
          /></SwiperSlide>
        })}
        </Swiper>
      </section>
      </div>
  );
}
