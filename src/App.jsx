import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';

import Header from './Components/Header.jsx';

import Home from './Pages/Home.jsx';
import Workshops from './Pages/Workshops.jsx';
import Datathon from './Pages/Datathon.jsx';  
import Hackathon from './Pages/Hackathon.jsx';  
import About from './Pages/About.jsx';

import Footer from './Components/Footer.jsx';


export default function App() {
  return (
    <div className='app-container'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Workshops' element={<Workshops />} />
          <Route path='/Datathon' element={<Datathon />} />
          <Route path='/Hackathon' element={<Hackathon />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}