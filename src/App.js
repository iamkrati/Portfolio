import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar  from './Navbar';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import ExpEdu from './pages/ExpEdu';
import Project from './pages/Project';
import Skills from './pages/Skills';


function App() {


  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ExpEdu" element={<ExpEdu />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
