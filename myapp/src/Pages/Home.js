import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../FooterContainer/Footer'
import BinaryForm from '../Form/BinaryForm'
import classes from './Home.module.css'

function Home() {
  return (
    <div>
      
        <h1 className={classes.header}>Welcome To Limkokwing's Binary Converter</h1>
        <BinaryForm />
      
    </div>
  )
}

export default Home