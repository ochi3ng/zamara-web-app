import React, {useEffect, useState} from 'react';

type Props = {
  route:any
}

const Dashbord = ({route}:Props) => {
  const [user, setUser]= useState();

  const [userId]=route.params

  useEffect(()=>{
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) =>
        res.json().then((data) => {
          console.log(data);
        })
      )
      .catch((err)=>console.log(err))
  }, [userId])
  return (
    <div className='dashbord'>
        <div>Welcome Stephen Amimo</div>
        <p>your profile is as below:</p>
        <div>Age:50</div>
        <div>Gender:male</div>
        <div>Email:atuny0@sohua.com</div>
        <div>Phone:+637916758914</div>
        <div>Birth Date:2000-12-25</div>
        <div>Blood Group:A-</div>
        <div>Height:189</div>
        <div>Weight:75.4</div>
        <div>Eye Color:Green</div>
    </div>
  )
};

export default Dashbord;
