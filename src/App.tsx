import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './components/LoginScreen';
import Dashbord from './components/Dashbord';
import { Routes, Route } from 'react-router-dom';
import StaffViewScreen from './components/StaffViewScreen';

function App() {
  return (
   <Routes>
    <Route path='/' element={<LoginScreen/>}/>
    <Route path='/staff' element={<StaffViewScreen/>}/>
    <Route path='/dashbord' element={<Dashbord/>}/>
   </Routes>
  );
}

export default App;
