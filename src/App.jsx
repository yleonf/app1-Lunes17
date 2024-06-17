
import { useState } from 'react';
import './App.css'

function App() {
 //Esto es un estado 
 //cont es el estado
 // setCont es el método con que se modifica el estado
const[cont,setCont]=useState(0)

const increment=()=>{
setCont(cont+2)

}

  return (
    <>
    <p> Contador: {cont}</p>
    <button onClick={increment}>Incrementar</button>
    </>
  )
}

export default App
