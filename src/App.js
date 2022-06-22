import React, { useState, useEffect } from 'react'
import './App.css';
import Vision from './components/Vision'
import visions from './data/vision-objects.json'

function App() {

  const [ todaysVision , setTodaysVision ] = useState()

  useEffect( () => {
    setTodaysVision(visions.data[Math.floor(Math.random() * visions.data.length)].vision)
  } , [])

  const refreshVision = () => {
    setTodaysVision(visions.data[Math.floor(Math.random() * visions.data.length)].vision)
  }

  return (
    <div>
      <Vision booger={todaysVision}/>
      <button onClick={refreshVision} type="button">Refresh</button>
    </div>
  );
}

export default App;
