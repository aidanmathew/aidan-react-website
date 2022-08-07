import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path={process.env.PUBLIC_URL + "/projects"} element={<Projects />} />
        <Route path={process.env.PUBLIC_URL + "experience"} element={<Experience />} />
      </Routes>
      <Footer />
    </Router>
  </div>
}

export default App;
