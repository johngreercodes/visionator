import React, { useState, useEffect } from 'react'
import './App.css';
import Vision from './components/Vision'
import visions from './data/vision-objects.json'

function App() {

  const [ todaysVision , setTodaysVision ] = useState()

  useEffect( () => {
    setTodaysVision(visions.data[Math.floor(Math.random() * visions.data.length)].vision)
  } , [])

  const consoleHi = () => {
    console.log('hi')
  }

  return (
    <div>
      <Vision booger={todaysVision}/>
      <button onClick={consoleHi} type="button">Refresh</button>
    </div>
  );
}

export default App;
