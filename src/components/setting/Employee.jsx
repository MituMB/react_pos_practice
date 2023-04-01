import React from 'react'
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
const Employee = () => {
  return (
    <div className='employee setting'>
         <h2>Employee Management</h2>
         <div className="customer_tbl card">
        <table>
          <tr>
            <th>Name</th>
            <th>Employee Id</th>
            <th>Action</th>
          </tr>

          <tr>
            <td>Laila</td>
            <td>250</td>
          
            <td>
              <div className="act_btn">
                <Link className="green" to="/">
                  {" "}
                  <MdEdit /> Edit
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>Laila</td>
            <td>250</td>
            
            <td>
              <div className="act_btn">
              <Link className="green" to="/">
                  {" "}
                  <MdEdit /> Edit
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>Laila</td>
            <td>250</td>
            <td>
              <div className="act_btn">
              <Link className="green" to="/">
                  {" "}
                  <MdEdit /> Edit
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>Laila</td>
            <td>250</td>
            <td>
              <div className="act_btn">
                <Link className="green" to="">
                  {" "}
                  <MdEdit /> Edit
                </Link>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Employee