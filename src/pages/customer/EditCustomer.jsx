import React from 'react'
import { Link } from 'react-router-dom'
import "./Customer.scss";



const EditCustomer = () => {
  return (
    <div className="customer p-3">
    <div className="title pb-2">
        <h2>Edit Customer</h2>
        </div>
        <form className="form card recipt p-2 pt-3">
      <div className="form-control">
        <label>Product Name</label>
        <input type="text" placeholder="Product Name" value=""/>
      </div>
      <div className="form-control">
        <label>Product Unit</label>
        <select id="" placeholder="Select">
          <option value="">Select</option>
          <option value="">A</option>
          <option value="">C</option>
          <option value="">U</option>
          </select>
      </div>
      <div className="form-control">
        <label>Category</label>
        <select id="" placeholder="Select">
          <option value="">Select</option>
          <option value="">A</option>
          <option value="">C</option>
          <option value="">U</option>
              </select>
      </div>
      <div className="form-control">
        <label>SKU</label>
        <input type="text" placeholder="Product SKU" value=""/>
      </div>

      <div className="form-control">
        <label>Barcode Type</label>
        <input type="text" placeholder="123(ABC)" value=""/>
      </div>
      <div className="form-control">
        <label>Product ID</label>
        <input type="text" placeholder="9898876558" value=""/>
      </div>
      <div className="act_btn">
          <button className="btn btn-secondary">Update</button>
      </div>
    </form>
    
    <Link className="back yellow" to="/customer">Back</Link>
    </div>
  )
}

export default EditCustomer