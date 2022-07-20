import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";
import MainPageCarousel from "./MainPageCarousel";
import { popularMovies, latestMovies, popularTV, latesTV } from "../utils/constants/urls";




export default function Homepage(){

    return (
        <>
      <Navbar /> 
      <Hero />
      <Search />
      <MainPageCarousel url={popularMovies} title="What Movies People Are Watching" />
      <MainPageCarousel url={latestMovies} title="Just Released in Theatres" />
      {/* <MainPageCarousel url={popularTV} title="Just Released in Theatres" />
      <MainPageCarousel url={latesTV} title="Just Released in Theatres" /> */}
      </>
    )
}