import React from 'react'
import ReactDOM from "react-dom";
import "./Loader.scss";
import loaderImg from "../../assets/img/loader.png";
import logo from "../../assets/img/logo.png";
import PropagateLoader from "react-spinners/PropagateLoader";
const Loader = () => {
  return ReactDOM.createPortal(
    <div className='wrapper'>
        <div className="loader">
            <div className="bg">
            <img src={loaderImg} alt="" />
            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
           <div className='pulse'>
            <PropagateLoader color="#F67F20" />
           </div>
        </div>
    </div>,
      document.getElementById("loader")
  )
}

export default Loader