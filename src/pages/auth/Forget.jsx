import React from 'react'
import { BiLock } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom'
import auth from "../../assets/img/auth.png";
import line from "../../assets/img/Line.png";

const Forget = () => {
  return (
    <div className="container auth">
    <div className="left">
      <img src={auth} alt="" />
    </div>
    <div className="divider">
        <img src={line} alt="" />
      </div>
    <div className="right">
      <div className="form">
        <div className="form_title">
          <p>Forget your password</p>
          <h1>Forget Password</h1>
        </div>
        <div className="py-3">
             <p>Please enter your email address below 
you will receive a verification link</p>
              </div>
        <form autocomplete="off">
        <div className="form_control">
              <span>
                <MdAlternateEmail />
              </span>
              <input
                type=""
                placeholder="Email Address"
                required
                name="email"
                aria-autocomplete="none"
                autocomplete="off"
              />
            </div>
        
          
          <button className="btn btn-primary mt-3">Continue</button>
        </form>
              
        <div className="py-3 hr">
                    <hr /> <p>or</p>
                </div>

                <div className="login_option">
                  <button className="">  <FcGoogle />Google</button>
                  <button className="">  <FaFacebookF color="blue"/>Facebook</button>
            
                </div>

                <div className="center">
                <p>Remember your password?<Link to="/"><span className="yellow"><b>Login</b></span></Link></p>
                </div>

      </div>
    </div>
  </div>
  )
}

export default Forget