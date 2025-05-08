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
            <Route
              path="*"
              element={<h1 className="section--title">404 Not Found</h1>}
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
