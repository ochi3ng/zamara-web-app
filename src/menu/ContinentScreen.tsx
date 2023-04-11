import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContinentScreen() {
    let navigate=useNavigate();
    const moveToDashbord=()=>{
      navigate('/dash')
    }
  
  return (
    <div>
      <h1>Continents</h1>
      <button onClick={moveToDashbord}>Dashbord</button>
    </div>
  )
}

export default ContinentScreen
