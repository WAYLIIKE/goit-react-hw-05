import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import './App.module.css';
import MoviesPage from '/Programming/GoIT/REACT/goit-react-hw-05/src/pages/MoviesPage/MoviesPage';
import HomePage from '/Programming/GoIT/REACT/goit-react-hw-05/src/pages/HomePage/HomePage';
import NotFoundPage from '/Programming/GoIT/REACT/goit-react-hw-05/src/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
