import React, { useState } from "react";
import "./Setting.scss";
import user from "../../assets/img/user.png";
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import SetPersonal from '../../components/setPersonal/SetPersonal';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SetPersonal from "../../components/setting/SetPersonal";
import Employee from "../../components/setting/Employee";
import Auth from "../../components/setting/Auth";
import LanguageSetting from "../../components/setting/LanguageSetting";
const Setting = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className="setting p-3">
      <div className="title pb-2">
        <h2>Setting</h2>
      </div>
      <div className="setting_wrap">
        <div className="left card p-3">
          <div className="user_box">
            <div className="img_holder">
              <img src={user} alt="" />
            </div>
            <div className="info_holder pb-2">
              <p>
                <b>Saul Goodmate</b>
              </p>
              <small>Head Cashier</small>
            </div>
          </div>
          <div className="setting_info">
            <div
              onClick={() => toggleTab(1)}
              className={`tab ${getActiveClass(1, "active-tab")}`}
            >
              <h3>Personal Information</h3>
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={`tab ${getActiveClass(2, "active-tab")}`}
            >
              <h3>Employee Management</h3>
            </div>
            {/* <div
              onClick={() => toggleTab(3)}
              className={`tab ${getActiveClass(3, "active-tab")}`}
            >
              <h3>Opening Hours</h3>
            </div> */}
            <div
              onClick={() => toggleTab(3)}
              className={`tab ${getActiveClass(3, "active-tab")}`}
            >
              <h3>Login & Password</h3>
            </div>

            <div
              onClick={() => toggleTab(4)}
              className={`tab ${getActiveClass(4, "active-tab")}`}
            >
            <h3>Language & region</h3>
            </div>

          </div>
        </div>
        <div className="right tab_content p-2">
          <div className={`content ${getActiveClass(1, "active-content")}`}>
            <SetPersonal />

          </div>
          <div className={`content ${getActiveClass(2, "active-content")}`}>
           <Employee />
          </div>
          {/* <div className={`content ${getActiveClass(3, "active-content")}`}>
            <h2>Opening Hours</h2>
          </div> */}
          <div className={`content ${getActiveClass(3, "active-content")}`}>
          <Auth />
          </div>
          <div className={`content ${getActiveClass(4, "active-content")}`}>
          <LanguageSetting />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
