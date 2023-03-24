import React from 'react';
import Image from 'next/image';

// INTERNAL IMPORT
import Style from './Notification.module.css';
import images from '../../../img';

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_image}>
        <Image 
        src={images.user1}
        alt= "Profile Image"
        width={50}
        height={50}
        className= {Style.notification_box_image}
        />
        </div>
       <div className={Style.notification_box_info}>
        <h4>Shoaib Akhter</h4>
        <p>Measure action your user</p>
        <small>3 minutes ago</small>
        <span className={Style.notification_box_new}></span>
       </div>
      </div>
    </div>
  )
}

export default Notification
