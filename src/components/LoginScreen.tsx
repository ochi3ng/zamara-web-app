import { type } from 'os';
import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';


const LoginScreen= () => {
  let navigate=useNavigate();
  const [name, setName] = useState("");
  const [password, setPasswod] = useState("")
  const [error,setError]= useState(false)
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
      setError(true)
      if(data.token !== undefined) {
        localStorage.setItem("data", JSON.stringify(data.id));
        navigate(`/dash/ ${data.id}`)
      }
    })
    )
    .catch((error)=>console.log(error))
    console.log()
  }
  const HandleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };
  const HandleOnPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswod(event.target.value)
  };
  return(
    <div className='login'>
      <div className='outer'>
        <div className='welcome'>Welcome to Zamara</div>
        {error && <div className='errorm'>Invalid credentials</div> }
        <div className='input'>
          <input type='text' value={name} onChange={HandleOnNameChange} placeholder='Enter your name'/>
        </div>
        <div className='input'>
          <input type='password' value={password} onChange={HandleOnPasswordChange} placeholder='Enter password' />
        </div>
        <button className='button' onClick={Login}>Sign In</button>
      </div>
    </div>
  )
};

export default LoginScreen;
