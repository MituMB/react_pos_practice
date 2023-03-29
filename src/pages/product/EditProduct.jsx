import React from "react";
import "./Product.scss";
import { IoCloudUploadSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const EditProduct = () => {
  return (
    <div className="product p-3">
    <div className="title pb-2">
      <h2>Edit Product</h2>
    </div>
    
    <form className="form card recipt p-2">
      <div className="upload_btn">
          <input type="file" name="file" id="file" class="inputfile" />
          <label for="file">
          <IoCloudUploadSharp/>
          </label>
          <h4 className="mt-2">Upload Image</h4>
      </div>
      <br />
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
    
      <Link className="back yellow" to="/product">Back</Link>
    
  </div>
  )
}

export default EditProduct