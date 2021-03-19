import React, { useRef, useEffect } from 'react';
import './Login.css';
import img1 from './main_car.jpg';
import logo from './logo.PNG';
import {TweenMax} from 'gsap';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



function Login() {
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
             
          </div>
          <div className="separate" id="form-section">
             <div className="form-style">
                <div className="logo" ref={el => logos = el}>
                   { <img src={logo} alt="logo" /> }
                </div>
                <h6 ref={el => headers = el}>Welcome to Catch</h6>
                <form ref={el => form = el}>
                    <div className="fields">
                      <label> </label><br />
                      <input type="email" placeholder=" Username" />
                    </div>
                    <div className="fields">
                      <label></label><br />
                      <input type="password" placeholder="Password" />
                     
                      <FormControlLabel
                      control={<Checkbox color="success" name="saveDetails" value="yes" />}
                      label="Remember me"
                    />   
                      
                    </div>
                    <input type="submit" value="Login" className="submit-btns" />
                   
                    
                </form>
               
                
                
                
             </div>
          </div>
      </div>
    );
}

export default Login;