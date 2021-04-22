import React, { useRef, useEffect } from 'react';
import './Login.css';
import img1 from './main_car.jpg';
import logo from './logo.PNG';
import {TweenMax} from 'gsap';
import Checkbox from '@material-ui/core/Checkbox';


function HomePage() {
    let imgs = useRef(null);
    let headers = useRef(null);
    let logos = useRef(null);
    let form = useRef(null);
    

    useEffect(()=>{
      TweenMax.to(imgs, 1, {delay: 0.4, opacity: 1 , ease: 'easeOut'})
      TweenMax.to(logos, 2, {delay: 1.5, opacity: 1, ease: 'easeOut'})
      TweenMax.to(headers, 2, {delay: 2, opacity: 1, ease: 'easeOut'})
      TweenMax.to(form, 2, {delay: 2.5, opacity: 1, ease: 'easeOut'})
    })
    return (
      <div className="wrappers">
          <div className="separate" id="start">
             <div className="banner" ref={el => imgs = el}>
                <img src={img1} alt="main-img" />
             </div>
             <p className="copyright">© 2020 Catch.  All rights reserved</p>
          </div>
          <div className="separate" id="form-section">
             <div className="form-style">
                <div className="logo" ref={el => logos = el}>
                   { <img src={logo} alt="logo" /> }
                </div>
                <h3 ref={el => headers = el}>Welcome to Catch</h3>
                <form ref={el => form = el}>
                    <div className="fields">
                      <label>Username: </label><br />
                      <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="fields">
                      <label>Password:</label><br />
                      <input type="password" placeholder="Enter your password" />
                     
                      
                      
                    </div>
                    <input type="submit" value="Login" className="submit-btn" />
                   
                    
                </form>
               
                
                
                
             </div>
          </div>
      </div>
    );
}

export default HomePage;