import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";
import PopularMovies from "./PopularMovies";

export default function Homepage(){

    return (
        <>
      <Navbar /> 
      <Hero />
      <Search />
      <PopularMovies />
      </>
    )
}