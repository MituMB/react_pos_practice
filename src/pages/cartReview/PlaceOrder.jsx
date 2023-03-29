import React from 'react'
import "./CartReview.scss";
import success from "../../assets/img/order.png";
const PlaceOrder = () => {
  return (
    <div className="place_order">
        <div className="success_info">
        <img src={success} alt="" />
       <div>
       <h1>Your Order Placed Successfully !</h1>
        <p>Please wait for 5-10 Minute for your order</p>
       </div>
        </div>
    </div>
  )
}

export default PlaceOrder