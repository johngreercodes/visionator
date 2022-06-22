import React, { useState, useEffect } from 'react'
import './App.css';
import Vision from './components/Vision'
import visions from './data/vision-objects.json'

function App() {

  const [ todaysVision , setTodaysVision ] = useState()

  useEffect( () => {
    // return visions[Math.floor(Math.random() * visions.data.length)]
    setTodaysVision(visions.data[Math.floor(Math.random() * visions.data.length)].vision)
    console.log(todaysVision)
  } , [])

  return (
    <div>
      <Vision name="John"/>
    </div>
  );
}

export default App;
