import React from 'react'
import "./Setting.scss";
import user from "../../assets/img/user.png";
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import SetPersonal from '../../components/setPersonal/SetPersonal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Setting = () => {
  return (
    <div className="setting p-3">
       <div className="title pb-2">
      <h2>Setting</h2>
    </div>
    <div className="setting_wrap">
   <div className="left card">
   <div className="user_box">
        <div className="img_holder">
          <img src={user} alt="" />
        </div>
        <div className="info_holder">
          <p><b>Saul Goodmate</b></p>
          <small>Head Cashier</small>
      
        </div>
      </div>
      <div className="setting_info">
      <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>


  </Tabs>

        {/* <div>
          <Link to="setPersonal">Personal Information</Link> 
        </div>
        <div>
          <Link>Employee Management</Link> 
        </div>
        <div>
          <Link>Opening Hours</Link> 
        </div>
        <div>
          <Link>Login & Password</Link> 
        </div>
        <div>
          <Link>Language & region</Link> 
        </div> */}
      </div>
   </div>
   <div className="right">
   <Tabs>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
   </div>
    </div>
    </div>
  )
}

export default Setting