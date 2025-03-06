import { Link, Outlet } from 'react-router-dom';

import Header from "./header/header";
import { useState } from 'react';
const Layout=()=>{

      
      const [popup, setShowPopUp]=useState(false);

      
      const PopUp=({Title,Description,btn,onClose,btnclose})=>{
        return (
          <>
          <div className='popup'>
            <h1 className='font-bold mb-3'>{Title}</h1>
            <p className='font-gray-500'>{Description}</p>
            <button className='btn btn-default mt-3 font-bold'>{btn}</button>
            <button className='btn btn-default mt-3 font-bold close' onClick={onClose}>{btnclose}</button>
            </div>
           </>
        )
      }
      


  return(
    <>
    <div className="md:container md:mx-auto">
    <div className='main-head mt-3'>
     <Header/>
      <ul>
        <li>
            <Link  to="/">Home</Link>
        </li>
        <li>
            <Link  to="/about">About</Link>
        </li>
        <li>
            <Link  to="/service">Service</Link>
        </li>
        <li>
            <Link  to="/contact">Contact</Link>
        </li>
       
      </ul>
      <a className='check' onClick={()=>setShowPopUp(true)} href='#'>Check it</a>
      </div>
      </div>

{popup && (
       <PopUp Title="welcome to my site" Description="Lorem ipsum doler sit amet. I am a web designer with 6 years of experience. my technical skills are psd to html,wordpress shopify." btn="Read More" btnclose="close"  onClose={()=>setShowPopUp(false)}/>
)}


    
      <Outlet/>

   
    </>
  )
}

export default Layout;