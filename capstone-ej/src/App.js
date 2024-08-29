import './App.css';
import { Routes, Route } from 'react-router-dom';
import Entry from './pages/Entry';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/entry' element={<Entry />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
