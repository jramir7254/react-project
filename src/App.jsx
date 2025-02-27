// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Datathon from './Pages/Datathon.jsx';  // Make sure this import is added

function App() {
  return (
    <div className='app-container'>
      <Header />
      {/* The main content area */}
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Datathon' element={<Datathon />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;