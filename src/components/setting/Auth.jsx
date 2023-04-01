import React from 'react'

const Auth = () => {
  return (
    <div className="setting">
    <h2>Login & Password</h2>
    <form className="pt-2">
    <div className="form-control">
        <label>UserName</label>
        <input type="text" placeholder="UserName" value=""/>
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
        <label>Password</label>
        <input type="text" placeholder="Password" value=""/>
    </div>
    <div className="text-right">
        <p className="yellow">Change Password?</p>
    </div>
    <button className="btn btn-secondary">Save Changes</button>
    </form>
</div>
  )
}

export default Auth