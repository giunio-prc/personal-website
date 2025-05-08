import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Navbar from './website/Pages/Home/Navbar';
import Home from './website/Pages/Home/Homescreen';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
