import React from 'react'
import { BiLock } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import auth from "../../assets/img/auth.png";
import line from "../../assets/img/Line.png";

const PassChanged = () => {
const navigate =  useNavigate()
    const backBtn = () => {
        navigate("/")
    }
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
          <p>Password changed successfully</p>
          <h1>Password Changed</h1>
        </div>
        <div className="py-3">
             <p style={{fontSize:"2.2rem"}}>We have sent a verification link to your
email address <span className="green">admin22@gmail.com</span></p>
              </div>
              <div className="">
                <p style={{fontSize:"1.8rem"}}>Just click on the link in your mail box & all done.</p>
                </div>
        <form autocomplete="off">

          <button className="btn btn-primary mt-3" onClick={backBtn}>Back to Login</button>
          <button className="btn btn-secondary mt-3">Resend Link</button>
        </form>

      </div>
    </div>
  </div>
  )
}

export default PassChanged