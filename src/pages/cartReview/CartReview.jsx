import React from "react";
import "./CartReview.scss";
import products from "../../data/cart"
import { Link } from "react-router-dom";
const CartReview = () => {
  return (
    <div className="cart_review p-3">
      <div className="title">
        <h2>Order #20235</h2>
      </div>

      <form className="form recipt pt-2">
        <div className="form-control">
          <label>Recipent</label>
          <input type="text" placeholder="" value="Sarah"/>
        </div>
        <div className="form-control">
          <label>Gender</label>
          <input type="text" placeholder="" value="Female"/>
        </div>
        <div className="form-control">
          <label>City</label>
          <input type="text" placeholder="" value="United City"/>
        </div>
        <div className="form-control">
          <label>Phone Number</label>
          <input type="text" placeholder="" value="+(21) 9898876558"/>
        </div>

        <div className="form-control">
          <label>Email Address</label>
          <input type="text" placeholder="" value="sarah259@gmail.com"/>
        </div>
        <div className="form-control">
          <label>Customer ID</label>
          <input type="text" placeholder="" value="9898876558"/>
        </div>
        <div className="form-control">
          <label>Address</label>
         <textarea cols="100" rows="10" value="2603 Jadewood Drive"></textarea>
        </div>
      </form>
      <div className="cart_order py-3">
         <div className="product_wrap">
         {
            products.map((item,index)=>(
              <div className="product_card" key={index}>
              <div className="product_info">
                  <img src={item?.img} alt="" />
                  {/* <div className="info_details"> */}
                    <p><b>{item.name}</b></p>
                    <p><span className="yellow">{item.price}</span></p>
                  {/* </div> */}
                  <div className="product_qty">
                <div className="act_btn">-</div> 
                <div className="num">10</div>
                <div className="act_btn">+</div>

              </div>
              </div>
           
          </div>

            ))
          }
         </div>

     
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

            <div className="btn_group">
            <Link className="btn btn-primary mt-3" > Print Order </Link>
            <Link className="btn btn-secondary mt-3" to="/place_order"> Place Order </Link>
            </div>
            </div>
            
          </div>
        </div>
    </div>
  );
};

export default CartReview;
