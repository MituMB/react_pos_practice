import React from 'react'
import "./Order.scss";
import products from "../../data/cart"

const OrderDetails = () => {
  return (
    <div className="order p-3">
      <div className="order_list">
        <div className="title pb-2">
        <h2>All Orders</h2>
        </div>
        <div className="card p-2">
          {/* <h2>All Orders</h2> */}
          <div className="order_num active p-2">
            <div>
              <p><b>Order #20235</b></p>
              <small><span>Table: 20</span>,<span>Guest: 4</span></small>
            </div>
            <div>
              <small className="green"><b>Paid</b></small>
             <p>$230</p>
            </div>
          </div>
          <div className="order_num p-2">
            <div>
              <p><b>Order #20236</b></p>
              <small><span>Table: 20</span>, <span>Guest: 4</span></small>
            </div>
            <div>
              <small className="green"><b>Paid</b></small>
             <p>$230</p>
            </div>
          </div>
          <div className="order_num p-2">
            <div>
              <p><b>Order #20237</b></p>
              <small><span>Table: 20</span>, <span>Guest: 4</span></small>
            </div>
            <div>
              <small className="yellow"><b>Unpaid</b></small>
             <p>$230</p>
            </div>
          </div>
          <div className="order_num p-2">
            <div>
              <p><b>Order #20238</b></p>
              <small><span>Table: 20</span>, <span>Guest: 4</span></small>
            </div>
            <div>
              <small className="green"><b>Paid</b></small>
             <p>$230</p>
            </div>
          </div>
        </div>
      </div>
      <div className="order_details">
        <div className="title pb-2">
          <h2>Order #20235</h2>
          <p className="green"><b>Paid</b></p>
        </div>
        {/* <div className="details">
        <b>Details</b>
        </div> */}
        <div className="product_wrap pt-2">
          <b>Orders</b>
         {
            products.map((item,index)=>(
              <div className="product_card" key={index}>
              <div className="product_info">
                  <img src={item?.img} alt="" />
                  {/* <div className="info_details"> */}
                    <p><b>{item.name} <span>x 3</span></b></p>
                   
                  {/* </div> */}
         
              </div>
              <p><span className="yellow">{item.price}</span></p>
           
          </div>

            ))
          }
         </div>
         <button className="btn btn-secondary mt-3" >Print Invoice</button>
      </div>
    </div>
  )
}

export default OrderDetails