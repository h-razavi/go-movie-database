import GlobalStyles from './styles/Global'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import MovieDetails from './components/MovieDetails';
import TVDetails from './components/TVDetails';
import TVSeasons from './components/TVSeasons';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <GlobalStyles />
    <Router>
      <Routes>
    <Route index element={<Homepage />} />
    <Route path='/movies/:id' element={<MovieDetails />} />
    <Route path='/tv/:id' element={<TVDetails />} />
    <Route path='/tv/:id/seasons/:num' element={<TVSeasons />} />
    </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
