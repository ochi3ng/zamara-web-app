import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function CreateStaffPage() {
  const [data, setData]= useState()
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate()
  const Confirmcreate = () => {
    fetch("https://crudcrud.com/api/a5f0ad869d5b4a77bfa8c17039d84b19/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        department: department,
        email: email,
      })

    })
      .then((response) => response.json())
      .then((data)=>setData(data))
    navigate('/staffpage')
  };

  const Editcreate = () => {
    navigate('/staff')

  }
  const onFirstnameChange =(e:any)=>{
    setFirstname(e.target.value)
  }
  const onLastnameChange = (e:any) => {
    setLastname(e.target.value)
  }
  const onDepartmentChange = (e:any) => {
    setDepartment(e.target.value)
  }
  const onEmailChange = (e:any) => {
    setEmail(e.target.value)
  }
  const onPhoneChange = (e:any) => {
    setPhone(e.target.value)
  }
  const onSalaryChange = (e:any) => {
    setSalary(e.target.value)
  }
  return (
    <div className='outerStaffdiv'>
      <h1 className='Stafftitle'>Create staff</h1>
      <div className='staffpage'>
        <div>
          <input type='name' value={firstname} placeholder='FirstName' onChange={onFirstnameChange} /></div>
        <div>
          <input type='name' value={lastname} placeholder='LastName' onChange={onLastnameChange} /></div>
        <div>
          <input type='text' value={department} placeholder='Department' onChange={onDepartmentChange } /></div>

        <div>
          <input type='email' value={email} placeholder='Your Email' onChange={onEmailChange } /></div>
        <div>
          <input type='number' value={phone} placeholder='Your number' onChange={onPhoneChange } /></div>
        <div>
          <input type='number' value={salary} placeholder='salary' onChange={onSalaryChange} /></div>
        <div className='buttons'>
          <button onClick={Editcreate} className='editbutton'>Edit Staff</button>
          <button onClick={Confirmcreate} className='confirmbutton'>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default CreateStaffPage
