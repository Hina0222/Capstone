import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Poster1 from './pages/Poster1';

function App() {
  return (
    <div className='h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/poster1' element={<Poster1 />} />
      </Routes>
    </div>
  );
}

export default App;
