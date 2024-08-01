import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
       <div className="footer-content-left">

        <img src={assets.logo} alt="" />
        <p>Discover the best in skincare at M store. We import natural ingredients 
            with scientific innovational products to help you achieve radiant, healthy skin.</p>
        <div className="footer-social-icons">
         <img src={assets.facebook_icon} alt="" />
         <img src={assets.twitter_icon} alt="" />
         <img src={assets.linkedin_icon} alt="" />

        </div>

       </div>
       <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
       </div>
       <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+94715799952</li>
            <li>vontact@m.com</li>
        </ul>
       </div>
      </div>

      <hr />
       <p className="footer-codename">Malkicode❤️</p>
     
    </div>
  )
}

export default Footer
