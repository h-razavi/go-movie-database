import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";
import MainPageCarousel from "./MainPageCarousel";
import TVMainPageCarousel from "./TVMainPageCarousel";
import NewsSection from "./NewsSection";
import Footer from "./Footer";
import MovieDetails from './MovieDetails'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { popularMovies, upcomingMovies, popularTV, latesTV } from "../utils/constants/urls";





export default function Homepage(){

    return (
        <>
      <Navbar /> 
      <Hero />
      <Search />
      <MainPageCarousel url={popularMovies} title="What Movies People Are Watching" />
      <MainPageCarousel url={upcomingMovies} title="Coming Up to Your Screens Soon" />
      <TVMainPageCarousel url={popularTV} title="Popular on TV" />
      <TVMainPageCarousel url={latesTV} title="Now Showing on TV" />
      <NewsSection />
      <Footer />
      </>
    )
}