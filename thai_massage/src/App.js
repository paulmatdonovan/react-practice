import './App.css';
import Navbar from './Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../src/components/Home'
import About from './components/About'
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
