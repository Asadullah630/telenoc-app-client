import React from 'react'
import telenoc from "../assets/telenoc.png"
import saudiVisionLogo from "../assets/saudi-vision.png"
import { Link } from 'react-router-dom'
import "./Navbar.css";
const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid top ">
    
    <Link className="navbar-brand  " to="/"><img   src={telenoc} target=""/></Link>
    <button className="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <Link className="nav-link text-dark " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-dark " to="/contact-us">contact-us</Link>
        </li>
       
       
      </ul>
      <div>
      <img className="h-30 w-50" src={saudiVisionLogo} target=""/>
      </div>
      
    </div>
    
  </div>
</nav>
    
  )
}

export default Navbar
