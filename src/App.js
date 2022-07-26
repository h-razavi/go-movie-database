import GlobalStyles from './styles/Global'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import MovieDetails from './components/MovieDetails';
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
    <Route path='movies/moviedetail' element={<MovieDetails />} />
    <Route path='/movies/:id' element={<MovieDetails />} />
    </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
