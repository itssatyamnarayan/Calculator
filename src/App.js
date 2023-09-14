import React from 'react';
import { useState, useRef } from 'react';
import './App.css';

function App() {
 <div style={{backgroundColor:'black'}}></div>
  const inputRef=useRef(null);
  const resultRef=useRef(null);
  const [result,setResult]=useState(0);

  function plus(e){

    e.preventDefault();

     setResult((result)=>result+Number(inputRef.current.value));
  }
  
  function minus(e){

    e.preventDefault();

     setResult((result)=>result-Number(inputRef.current.value));
  }

  function multiply(e){

    e.preventDefault();
    if(result===0){
      setResult((result)=>result+1)
      setResult((result)=>result*Number(inputRef.current.value))
    }
    else{
     setResult((result)=>result*Number(inputRef.current.value))
    }
  }

  function divide(e){

    e.preventDefault(); 
    if(result===0){
      
      setResult((result)=>Number(inputRef.current.value))
      
    }
    else{
     setResult((result)=>result/Number(inputRef.current.value))
    }  
  
  }

  function sqRoot(e){

    e.preventDefault();
    if(result===0){
      setResult((result)=>result+Number(inputRef.current.value))
      setResult((result)=>Math.sqrt(result))
    }
    else{
       setResult((result)=>Math.sqrt(result))
    }
  }

  function modulus(e){

    e.preventDefault();
    if(result===0){
      setResult((result)=>Number(inputRef.current.value))
    }
    else{
     setResult((result)=>result%Number(inputRef.current.value))
    }
  }

  function power(e){
    e.preventDefault();
    if(result===0){
    setResult((result)=>Number(inputRef.current.value))
    }
    else{
      setResult((result)=>Math.pow(result , Number(inputRef.current.value)))
    }
  }

  function clearInput(e){

    e.preventDefault();

    inputRef.current.value=" ";
  }

  function resetResult(e){

    e.preventDefault();
    setResult(0);
    
  }

  


  return (
    <div className="App">

    {/* Another Approach.......
      <div><h1> Calculator </h1></div>
      <form>
    <center>
      <input 
        pattern="[0-9]"
        ref={inputRef}
        type="number"
        placeHolder="0"
      />

      <button onClick={plus}>Add</button>
      <button onClick={minus}>Minus</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <button onClick={sqRoot}>Sq. Root</button>
      <button onClick={modulus}>Percentage</button>
      <button onClick={resetResult}>Reset Result</button>
      <button onClick={clearInput}>Clear</button>

      <h2>Result : {result}</h2>
      </center>
      </form>
    */}

    <center>
      <table>
        <thead>
          <th colSpan={'3'}>Calculator</th>
        </thead>
        <tbody>
         <th colSpan={'3'}>
          <input 
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeHolder="0"
         />
         <p ref={resultRef}>{result}</p> 
        </th>
          <tr><th><button onClick={plus}>Add</button></th><th><button onClick={minus}>Minus</button></th><th><button onClick={sqRoot}>Sq. Root</button></th></tr>
          <tr><th><button onClick={divide}>Divide</button></th><th><button onClick={multiply}>Multiply</button></th><th><button onClick={modulus}>Modulus</button></th></tr>
          <tr><th><button onClick={power}>Power</button></th><th><button onClick={clearInput}>Clear Input</button></th><th><button onClick={resetResult}>Reset</button></th></tr>

        </tbody>

      </table>
      </center>
      
    </div>

  );

}

export default App;
