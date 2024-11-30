import './App.css';
import Navbar from './Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../src/components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
