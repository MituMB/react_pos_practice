import React from "react";
import styles from "./auth.scss";
import auth from "../../assets/img/auth.png";
import line from "../../assets/img/Line.png";
import { MdAlternateEmail } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
const Login = () => {
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
            <p>Login to your account</p>
            <h1>Welcome Back!</h1>
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
                autocomplete="off"
              />
            </div>
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
            <p className="text_right"> <Link to="/forgot"><span className="yellow"><b>Forgot Password?</b></span></Link></p>
            <Link className="btn btn-primary mt-3" to="/home">Login</Link>
          </form>
                <div className="py-3 hr">
                    <hr /> <p>or</p>
                </div>

                <div className="login_option">
                  <button className="">  <FcGoogle />Google</button>
                  <button className="">  <FaFacebookF color="blue"/>Facebook</button>
            
                </div>

                <div className="center">
                <p>Don't have an account? <Link to="/register"><span className="yellow"><b>Sign Up?</b></span></Link></p>
                </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
