import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/logoDark.png";
import "./Sidebar.scss";
import menu from "../../data/sidebar"
const Sidebar = () => {
    //===active navlink
    const activeLink = ({ isActive }) => (isActive ? `active` : "");
  return (
    <div className="sidebar">
      <div className="logo p-3">
      <img src={logo} alt="" />
      </div>
      <div className="sidebar_menu p-3">

        {
          menu.map((item, index) => (
            <NavLink to={`${item.path}`} className={activeLink}>
            <div className="item" key={index}>
              <div className="icon">{item.icon}</div>
              {item.title}
            </div>
            </NavLink>
          ) )
        }

      </div>
    </div>
  )
}

export default Sidebar