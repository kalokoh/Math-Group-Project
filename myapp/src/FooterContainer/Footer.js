import React from 'react'
import classes from './Footer.module.css'

function Footer() {
  return (
    <React.Fragment>
      <div className={classes["footer-container"]}>
        <p className={classes.txt}>Limkokwing's Binary Converter</p>
        <p className={classes.copyright}> copyright&copy;Tech1012023</p>
      </div>
    </React.Fragment>
  )
}

export default Footer