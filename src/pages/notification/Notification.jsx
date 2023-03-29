import React from 'react'
import "./Notification.scss";
import { MdNotifications } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
const Notification = () => {
  return (
    <div className="notification p-3">
            <div className="title pb-2">
        <h2>Notification</h2>
        <p className="yellow">Mark All As Read</p>
        </div>
        <div className="card">
            <div className="info_box">
               <div className='left_box'>
               <div className="icon">
                    <MdNotifications/>
                </div>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, non voluptatibus, quas rem deserunt magnam ut consequatur optio natus labore asperiores ipsum neque illum rerum unde fuga excepturi incidunt dolores.</p>
                </div>
               </div>
               <div className="cross">
               <RxCross1/>
               </div>
            </div>
            <div className="info_box">
               <div className='left_box'>
               <div className="icon">
                    <MdNotifications/>
                </div>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, non voluptatibus, quas rem deserunt magnam ut consequatur optio natus labore asperiores ipsum neque illum rerum unde fuga excepturi incidunt dolores.</p>
                </div>
               </div>
               <div className="cross">
               <RxCross1/>
               </div>
            </div>
            <div className="info_box">
               <div className='left_box'>
               <div className="icon">
                    <MdNotifications/>
                </div>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, non voluptatibus, quas rem deserunt magnam ut consequatur optio natus labore asperiores ipsum neque illum rerum unde fuga excepturi incidunt dolores.</p>
                </div>
               </div>
               <div className="cross">
               <RxCross1/>
               </div>
            </div>
            <div className="info_box">
               <div className='left_box'>
               <div className="icon">
                    <MdNotifications/>
                </div>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, non voluptatibus, quas rem deserunt magnam ut consequatur optio natus labore asperiores ipsum neque illum rerum unde fuga excepturi incidunt dolores.</p>
                </div>
               </div>
               <div className="cross">
               <RxCross1/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Notification