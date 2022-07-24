import GlobalStyles from './styles/Global'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Routes>
    <Route index element={<Homepage />} />
    <Route path='movies/moviedetail' element={<MovieDetails />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
