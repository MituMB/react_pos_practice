import React from 'react'
import { BiLock } from 'react-icons/bi'
import { MdAlternateEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import auth from "../../assets/img/auth.png";
import line from "../../assets/img/Line.png";

const Register = () => {
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
          <p>Create new account</p>
          <h1>Registration</h1>
        </div>
        <form autocomplete="off">
          <div className="form_control">
            <span>
              <MdAlternateEmail />
            </span>
            <input
              type="email"
              placeholder="Email Address"
              required
              name="email"
              aria-autocomplete="none"
            />
          </div>
          <div className="form_control">
          <span>
              <BiLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              aria-autocomplete="none"
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
          <div className="mt-3">
              <p>By signing below, you agree to the <span className="yellow">Team of use </span>
and <span className="yellow">privacy notice</span></p>
              </div>
          <button className="btn btn-primary mt-3">Sign Up</button>
        </form>
              

              <div className="center mt-3">
              <p>Already have an account? <Link to="/"><span className="yellow"><b>Login</b></span></Link></p>
              </div>

      </div>
    </div>
  </div>
  )
}

export default Register