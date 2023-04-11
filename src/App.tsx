import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './components/LoginScreen';
import Dashbord from './components/Dashbord';
import { Routes, Route } from 'react-router-dom';
import ContinentScreen from './menu/ContinentScreen';
import StaffScreen from './menu/staffScreen';


function App() {
  return (
   <Routes>
    <Route path='/' element={<LoginScreen/>}/>
    <Route path='/staff' element={<StaffScreen/>}/>
    <Route path='/dash/:id' element={<Dashbord/>}/>
    <Route path='/Continent' element={<ContinentScreen/>}/>
   </Routes>
  );
}

export default App;
