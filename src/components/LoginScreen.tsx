import { type } from 'os';
import React, {useState} from 'react';

type props ={
  route:any,
  
}

const LoginScreen= ({route}:props) => {
  const [name, setName]=useState();
  const [password, setPasswod]=useState()
  const Login = ()=> {
    fetch("https://dummyjson.com/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        username:name,
        password: password,
      }),
    })
    .then((res)=>
    res.json().then((data)=>{
      if(data.token !== undefined) {
        localStorage.setItem("data", JSON.stringify(data.id));
        route.push("data", { userId: data.id, name: name })
        return;
      }
    })
    )
  }
  return(
    <div className='login'>
      <div className='outer'>
        <div className='welcome'>Welcome to Zamara</div>
        <div className='input'>
          <input type='text' placeholder='Enter your name'/>
        </div>
        <div className='input'>
          <input type='password' placeholder='Enter password' />
        </div>
        <button className='button' onClick={Login}>Sign In</button>
      </div>
    </div>
  )
};

export default LoginScreen;
