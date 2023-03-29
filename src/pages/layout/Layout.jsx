import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import "./Layout.scss";
const Layout = (   {children}) => {
  return (
    <div className="admin_layout">
        <Sidebar />
        <div className="main_content">
            {children}
        </div>
    </div>
  )
}

export default Layout