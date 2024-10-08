import { Routes, Route } from 'react-router-dom';
import Entry from './pages/Entry';
import About from './pages/About';
import Home from './pages/Home';
import Decibel from './pages/Decibel';
import "./styles/style.scss";
import Save from './components/decibel/Save';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/entry' element={<Entry />} />
      <Route path='/about' element={<About />} />
      <Route path='/decibel' element={<Decibel />} />
      <Route path='/decibel/save' element={<Save />} />
    </Routes>
  );
}

export default App;
