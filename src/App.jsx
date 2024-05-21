import { useState } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./components/Home"
import Contact from "./components/Contact"
import './App.css'
import Footer from './components/Footer';

function App() {
 

  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact-us' element={<Contact/>} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App
