import GlobalStyles from "./styles/Global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import MovieDetails from "./components/MovieDetails";
import TVDetails from "./components/TVDetails";
import TVSeasons from "./components/TVSeasons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import SearchResults from "./pages/SearchResults";
import NullSearch from "./components/NullSearch";
import Person from "./components/Person";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/tv/:id" element={<TVDetails />} />
          <Route path="/tv/:id/seasons/:num" element={<TVSeasons />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/genre=:genre" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/tv/genre=:genre" element={<TV />} />
          <Route path="/search/" element={<NullSearch />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/person" element={<Person />} />
          <Route path="/person/:id" element={<Person />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
