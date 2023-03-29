import React from "react";
import "./Product.scss";
import products from "../../data/cart"
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { BsFillTrash3Fill } from "react-icons/bs";
const Product = () => {
  return (
    <div className="product p-2">
      <div className="title pb-2">
        <h2>Product</h2>

        <Link className="btn btn-secondary" to="/addProduct">+ Add Product</Link>
      </div>

      <div className="product_tbl">
        <table>
          <tr>
            <th>Product</th>
            <th>Product ID</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {
            products.map((item, index) =>(

          <tr>
            <td width="250" style={{width: '250px'}}><div style={{display: 'flex',alignItems: 'center',gap:"1rem"}} >
            <img src={item.img} alt="" />
            <p>{item.name}</p>
              </div></td>
            <td>{index}</td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
            <td>
              <div  className="act_btn">
              <Link className="green" to="/editProduct"> <MdEdit/> Edit</Link>
              <Link className="yellow"> <BsFillTrash3Fill />Delete</Link>

              </div>
            </td>
          </tr>
            ))
          }
        </table>
      </div>
    </div>
  );
};

export default Product;
