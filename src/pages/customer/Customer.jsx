import React from "react";
import { Link } from "react-router-dom";
import "./Customer.scss";
import { MdEdit } from "react-icons/md";
const Customer = () => {
  return (
    <div className="customer p-3">
      <div className="title pb-2">
        <h2>Customer</h2>

        <Link className="btn btn-primary" to="/addProduct">
          Delete
        </Link>
      </div>
      <div className="customer_tbl card">
        <table>
          <tr>
            <th>Name</th>
            <th>Order</th>
            <th>Spents</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Action</th>
          </tr>

          <tr>
            <td>Laila</td>
            <td>250</td>
            <td className="yellow">$3500</td>
            <td>Femaile</td>
            <td>2603 Jadewood Drive</td>
            <td>
              <div className="act_btn">
                <Link className="green" to="/editCustomer">
                  {" "}
                  <MdEdit /> Edit
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>Laila</td>
            <td>250</td>
            <td className="yellow">$3500</td>
            <td>Femaile</td>
            <td>2603 Jadewood Drive</td>
            <td>
              <div className="act_btn">
              <Link className="green" to="/editCustomer">
                  {" "}
                  <MdEdit /> Edit
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>Laila</td>
            <td>250</td>
            <td className="yellow">$3500</td>
            <td>Femaile</td>
            <td>2603 Jadewood Drive</td>
            <td>
              <div className="act_btn">
              <Link className="green" to="/editCustomer">
                  {" "}
                  <MdEdit /> Edit
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>Laila</td>
            <td>250</td>
            <td className="yellow">$3500</td>
            <td>Femaile</td>
            <td>2603 Jadewood Drive</td>
            <td>
              <div className="act_btn">
                <Link className="green" to="/editProduct">
                  {" "}
                  <MdEdit /> Edit
                </Link>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Customer;
