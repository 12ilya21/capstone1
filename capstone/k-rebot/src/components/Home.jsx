import './../styles/Home.css';
import React from 'react';
// import Register from './Register';
import { useNavigate } from 'react-router-dom';
import logo from './../dish.png';
import img_ from './../pngwing.com (2).png';

export default function Home() {
  const navigate = useNavigate();
 
  return (
    <div className='container'>
      {/* <footer className='font'>chatbot website recommending and providing information on restaurants in Korea</footer> */}
      <div className='home-left'>

        <img className='home-left__logo' src={logo}></img>
      </div>
      <div className='home-right'>
        <div className='home-right__text-box'>
          <p className='home-right__k-rebot font'>K-REBOT</p>
          </div>
          <button className='home-right__button font' onClick={()=>{navigate('/Login');}}> Login</button>
        <button className='home-right__button font' onClick={()=>{navigate('/Register');}}> Register</button>


      </div>
    </div>
    
  );
}