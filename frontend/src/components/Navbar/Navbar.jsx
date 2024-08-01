import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';


const Navbar = ({setShowLogin}) => {
const[menu,setMenu]=useState("Home");

const{getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
      <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
      <li onClick={()=>setMenu("Collection")}className={menu==="Collection"?"active":""}>Collection</li>
      <li onClick={()=>setMenu("Mobile-app")}className={menu==="Mobile-app"?"active":""}>Mobile App</li>
      <li onClick={()=>setMenu("Contact-us")}className={menu==="Contact-us"?"active":""}>Contact us</li>

      </ul>
      <div className="navbar-right">
        <img src= {assets.search_icon}alt="" />
        <div className="navbar-search_icon">
         <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>  
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
                <button onClick={()=>setShowLogin(true)}>Sign in</button>
     
       
          </div>
    </div>
  )
}

export default Navbar
