import React from 'react'
import "./Search.scss";
import { MdNotifications } from "react-icons/md";
import { BiBarcodeReader } from "react-icons/bi";
const Search = () => {
  return (
    <div className="searchBar">
      <div className="search_box">
          <input type="text" placeholder='Search Here....'/>
         <div className="yellow">
         <BiBarcodeReader />
         </div>
      </div>
      <div className="icon">
          <MdNotifications />
      </div>
    </div>
  )
}

export default Search