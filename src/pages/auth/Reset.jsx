import React from 'react'
import { BiLock } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import auth from "../../assets/img/auth.png";
import line from "../../assets/img/Line.png";

const Reset = () => {
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
          <p>Create new password</p>
          <h1>Reset Password</h1>
        </div>
        <form autocomplete="off">
   
          <div className="form_control">
          <span>
              <BiLock />
            </span>
            <input
              type=""
              placeholder="Password"
              required
              name="password"
              aria-autocomplete="none"
              autocomplete="off"
            />
          </div>
          <div className="form_control">
          <span>
              <BiLock />
            </span>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="password2"
            />
          </div>
          <button className="btn btn-primary mt-3">Change Password</button>
        </form>
              <div className="py-3 hr">
                  <hr /> <p>or</p>
              </div>

              <div className="login_option">
                <button className="">  <FcGoogle />Google</button>
                <button className="">  <FaFacebookF color="blue"/>Facebook</button>
          
              </div>

              <div className="center">
                <p>Remember password?<Link to="/"><span className="yellow"><b>Login</b></span></Link></p>
                </div>

      </div>
    </div>
  </div>
  )
}

export default Reset