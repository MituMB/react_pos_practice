import React from 'react'
import "./Cart.scss";
import user from "../../assets/img/user.png";
import products from "../../data/cart"
import { TbPhoneCall } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate = useNavigate();
  const cartNavigate = () => {
    navigate("/cart_review")
  }
  return (

    <div className="cart p-2">

      <div className="user_box">
        <div className="img_holder">
          <img src={user} alt="" />
        </div>
        <div className="info_holder">
          <div>
          <p><b>Saul Goodmate</b></p>
          <small>Cashier</small>
          </div>
          <div className="icon">
            <TbPhoneCall />
          </div>
        </div>
      </div>
      <div className="cart_order py-3">
          <h2>Order #20235</h2>
          {
            products.map((item,index)=>(
              <div className="product_card" key={index}>
              <div className="product_info">
                  <img src={item?.img} alt="" />
                  <div className="info_details">
                    <p><b>{item.name}</b></p>
                    <p><span className="yellow">{item.price}</span></p>
                  </div>
              </div>
              <div className="product_qty">
                <div className="act_btn">-</div> 
                <div className="num">10</div>
                <div className="act_btn">+</div>

              </div>
          </div>

            ))
          }

     
          <div className="amount_calc p-2">
            <p>
              <span><b>Subtotal</b></span>
              <span><b>$200.00</b></span>
            </p>
            <p>
              <span>Tax</span>
              <span>$200.00</span>
            </p>
            <p>
              <span>Discount</span>
              <span>$200.00</span>
            </p>

            <div className="divider">
            <p>
              <span><b>Total</b></span>
              <span><b>$200.00</b></span>
            </p>

            <button className="btn btn-secondary mt-3" onClick={cartNavigate}> Place Order </button>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Cart