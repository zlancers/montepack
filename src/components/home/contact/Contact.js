import React from "react";
import { FaUser, FaPhone, FaFolder } from "react-icons/fa";
import { HiMail, HiChatAlt } from "react-icons/hi";

import styles from "./contact.module.css";
import contactBgImg from "../../../assets/contactBgImg.png";

const Contact = () => {
  return (
    <div
      className={styles.contactContainer}
      style={{ backgroundImage: `url(${contactBgImg.src})` }}
    >
      <div className={styles.contactInnerContainer}>
        <h1 className={styles.contactContainerTitle}>
          Get in touch <span> Trusted Packing & Moving Company!</span>
        </h1>
        <p className={styles.contactContainerSubTitle}>
          Our Packing & Moving services offer meticulous attention to detail,
          reliable transportation, and personalized care.
        </p>
        <div className={styles.contactForm}>
          <div className={styles.contactInputBox}>
            <input type="text" placeholder="Enter Your Name" />
            <FaUser />
          </div>
          <div className={styles.contactInputBox}>
            <input type="text" placeholder="Enter Your Email" />
            <HiMail />
          </div>
          <div className={styles.contactInputBox}>
            <input type="text" placeholder="Enter Your Number" />
            <FaPhone />
          </div>
          <div className={styles.contactInputBox}>
            <input type="text" placeholder="Enter Your Subject" />
            <FaFolder />
          </div>
          <div className={styles.contactInputBox}>
            <input type="text" placeholder="Enter Your Message" />
            <HiChatAlt />
          </div>
          <button className={styles.contactSubmitBtn}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
