import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Link, useNavigate, useParams} from 'react-router-dom';

type props={
  id:number
  firstName:string
  lastName:string
  email:string
  eyeColor:string
  bloodGroup:string
  gender:string
  phone:number
  height:number
  weight:number
  age:number
  birthDate:number
}

const Dashbord = () => {
  const navigate = useNavigate()
  const [getuser, setGetUser] = useState<props>({} as props);
  const {id} = useParams()
 
useEffect(()=>{
  

  const FetchData= async (id: number | undefined)=>{
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setGetUser(data));

  };
FetchData(Number(id))

}, [id])
console.log(getuser)
  const OnclickHandler =()=>{
    navigate("/")
  }
  return (
  <div className='outerdashbord'>
    <nav>
      <li><Link to='/'>Home</Link></li>
        <li><Link to='/staff'>Staff</Link></li>
        <li><Link to='/continent'>Continent</Link></li>
    </nav>
      <div className='dashbord'>
        <div>Welcome {getuser?.firstName} {getuser?.lastName}</div>
        <p>your profile is as below:</p>
        <p>Age:{getuser?.age}</p>
        <p>Gender:{getuser?.gender}</p>
        <p>Email:{getuser?.email}</p>
        <p>Phone:{getuser?.phone}</p>
        <p>Birth Date:{getuser?.birthDate}</p>
        <p>Blood Group:{getuser?.bloodGroup}</p>
        <p>Height:{getuser?.height}</p>
        <p>Weight:{getuser?.weight}</p>
        <p>Eye Color:{getuser?.eyeColor}</p>
        <button onClick={OnclickHandler}>log out</button>
      </div>
  </div>
  )
};

export default Dashbord;
