import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Poster1 from './pages/Poster1';
import Poster2 from './pages/Poster2';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/poster1' element={<Poster1 />} />
        <Route path='/poster2' element={<Poster2 />} />
      </Routes>
    </>
  );
}

export default App;
