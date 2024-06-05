import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './logo.png'

function Navbar() {
  return (
    <div>
    <nav id='header' class="navbar navbar-expand-lg bg-body-tertiary" >
    <div class="container-fluid">
    <img src={logo} alt='limkokwing' class='logo'/>
    <Link class="navbar-brand" to="/">LUCT's Binary Converter</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span>
      <AiOutlineMenu  />
      </span>

    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="lnk">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/manual">Manual</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar