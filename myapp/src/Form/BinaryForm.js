import React, { useState } from 'react'
import classes from './BinaryForm.module.css'
import copy from "copy-to-clipboard"

function BinaryForm() {
  
const [binary, setBinary] = useState("")
const [showAnswer, setShowAnswer] = useState(false);

const inputValidity = binary.length === 0;

function isBinaryString(num) {
 
    
    const binaryPattern = /^[01]+$/;
     
    // Test if the string matches the pattern
    return binaryPattern.test(num);
}
const isBinary  = isBinaryString(binary);



const binaryOnChangeHanmdler = (e) =>{
 setBinary(e.target.value);
 
}

const clearHandler = (e) =>{
  e.preventDefault();
  setBinary("");
  setShowAnswer(false);
}  

const copyDecimal = () =>{
  copy(decimal)
  alert(`copied ${decimal}`)

}

const copyOctal = () =>{
  copy(octal)
  alert(`copied ${octal}`)
}

const copyHexadecimal = () =>{
  copy(hexadecimal)
  alert(`copied ${hexadecimal}`)

}


   let decimal = parseInt(binary, 2).toString(10);
   let octal = parseInt(binary, 2).toString(8);
   let hexadecimal = parseInt(binary, 2).toString(16).toUpperCase();

const submitHandler = (e) =>{
e.preventDefault();
setShowAnswer(true);
  
console.log("Decimal: ", decimal)
console.log("Octal: ", octal)
console.log("Hexa: ", hexadecimal)
console.log(inputValidity);
console.log(isBinaryString(binary));
}

  return (
    <div className={classes.firstContainer}>
     <form action='' method='' className={classes.form}>
      
      <div className={classes.inputContainer}>
        <label>Enter Binary Number</label>
        <input inputMode='numeric' pattern='[0-1]*' value={binary} onChange={binaryOnChangeHanmdler} />
      </div>

      <div className={classes.error}>
        {showAnswer && inputValidity && <p>please some binary values</p>}
        {showAnswer && !isBinary && !inputValidity && <p>please enter only binary values</p>}
      </div>

      <div className={classes.buttonContainer}>
        <button onClick={submitHandler} >Convert</button>
        <button onClick={clearHandler}>Clear</button>
      </div>
      
    </form>  

    {showAnswer && !inputValidity && isBinary && <div className={classes.answer}>
    <table style={{border: '1px solid black' }}>
            <tr style={{border: '1px solid black' }}>
              <th style={{border: '1px solid black'}}>Decimal</th>
              <th style={{border: '1px solid black'}}>Octal</th>
              <th style={{border: '1px solid black'}}>Hexadecimal</th>
            </tr>
            <tr>
            <td onClick={copyDecimal} style={{border: '1px solid black', padding: '1rem', fontSize: '20px', cursor: 'pointer'}} >{decimal}</td>
            <td onClick={copyOctal} style={{border: '1px solid black', cursor: 'pointer',
             padding: '1rem', fontSize: '20px'}}>{octal}</td>
            <td onClick={copyHexadecimal} style={{border: '1px solid black' , padding: '1rem', fontSize: '20px', cursor: 'pointer',}}>{hexadecimal}</td>
            </tr>
            
          </table>

      
    </div>}
  </div>
  )
}

export default BinaryForm