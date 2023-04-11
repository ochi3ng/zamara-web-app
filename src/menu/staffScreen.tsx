import React from 'react'
import { useNavigate } from 'react-router-dom'

function StaffScreen() {
    let navigate=useNavigate();
    const navigatetodash=()=>{
      navigate("/dash")
    }
  return (
    <div>
          <h1>this is staff menu </h1>
      <button onClick={navigatetodash}>Staff</button>
    </div>
  )
}

export default StaffScreen
