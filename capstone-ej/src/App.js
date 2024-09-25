import './App.css';
import { Routes, Route } from 'react-router-dom';
import Entry from './pages/Entry';
import About from './pages/About';
import Home from './pages/Home';
import Decibel from './pages/Decibel';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/entry' element={<Entry />} />
      <Route path='/about' element={<About />} />
      <Route path='/decibel' element={<Decibel />} />
    </Routes>
  );
}

export default App;
