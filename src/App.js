import React, { useState, useEffect } from 'react'
import './App.css';
import Vision from './components/Vision'
import quotes from './data/visions'

function App() {

  const [ visions , manageVisions ] = useState(0)

  useEffect( () => {
    // return visions[Math.floor(Math.random() * visions.length)]
    manageVisions(quotes[Math.floor(Math.random() * quotes.length)])

  } , [])

  return (
    <div>
      <Vision visions={visions}/>
    </div>
  );
}

export default App;
