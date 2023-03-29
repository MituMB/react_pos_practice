import React from 'react'
import "./Setting.scss";
const SetPersonal = () => {
  return (
    <div className="">
        <h2>Personal Information</h2>
        <form className="pt-2">
        <div className="form-control">
            <label>First Name</label>
            <input type="text" placeholder="First Name" value=""/>
        </div>
        <div className="form-control">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" value=""/>
        </div>
        <div className="form-control">
            <label>Email</label>
            <input type="text" placeholder="Email" value=""/>
        </div>
        <div className="form-control">
            <label>Phone Number</label>
            <input type="text" placeholder="Phone Number" value=""/>
        </div>
        <div className="form-control">
            <label>Date of Birth</label>
            <input type="text" placeholder="Date of Birth" value=""/>
        </div>
        <div className="form-control">
            <label>Position</label>
            <input type="text" placeholder="Position" value=""/>
        </div>
        <button className="btn btn-secondary">Save Changes</button>
        </form>
    </div>
  )
}

export default SetPersonal