import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./footer.module.css";
import logoWhite from "../../../assets/logoWhite.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.mainFooterContainer}>
        <div className={styles.footerLogoDiv}>
          <Link href={"/"}>
            <Image src={logoWhite} alt="logo" className={styles.logoImg} />
          </Link>
          <p className={styles.footerDesc}>
            Servile successfully relocates close to 5000 families in a year
            around the world. With our offices in Mumbai, Pune, Bangalore,
            Delhi, Chennai, Hyderabad, Kolkata, we strive to make your move
            memorable.
          </p>
          <div className={styles.footerMediaDiv}>
            <Link href={"/"}>
              <FaFacebook />
            </Link>
            <Link href={"/"}>
              <FaLinkedin />
            </Link>
            <Link href={"/"}>
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className={styles.linkDiv}>
          <div className={styles.footerDiv}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Home
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> About Us
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Services
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Career
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Blogs
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Faq&#39;s
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Contact
            </Link>
          </div>
          <div className={styles.footerDiv}>
            <h3 className={styles.footerTitle}>Services</h3>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Packing & Moving
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Corporate Moving
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Exhibition Handling
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Fine Art Moving
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Pet Moving
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Vehicle Shifting
            </Link>
            <Link href={"/"} className={styles.footerLink}>
              <span>-</span> Storage Facility
            </Link>
          </div>
        </div>
        <div className={styles.footerInfoDiv}>
          <h3 className={styles.footerTitle}>Get In Touch</h3>
          <p className={styles.footerLable}>Location</p>
          <p className={styles.footerInfo}>
            504, Chandak Chambers, Near Bisleri W.E.H. Metro station,
            Andheri-Kurla Road, Andheri -East, Mumbai- 400099, India.
          </p>
          <p className={styles.footerInfo}>Phone: +91 22 46071085</p>
          <p className={styles.footerInfo}>Phone: +91 8360500600</p>
          <Link href={"/"} className={styles.footerInfo}>
            Email: info@servilerelocations.com
          </Link>
        </div>
      </div>
      <div className={styles.footerPolicyDiv}>
        <p className={styles.footerPolicyInfo}>
          © 2023 Servile Relocations Pvt. Ltd. All Rights Reserved.
        </p>
        <div className={styles.footerPolicyInfoDiv}>
          <Link href={"/"} className={styles.footerPolicyInfo}>
            Environment Policy
          </Link>
          <Link href={"/"} className={styles.footerPolicyInfo}>
            Code of Conduct
          </Link>
          <Link href={"/"} className={styles.footerPolicyInfo}>
            Anti-Bribery Policy
          </Link>
          <Link href={"/"} className={styles.footerPolicyInfo}>
            Privacy Policy
          </Link>
          <Link href={"/"} className={styles.footerPolicyInfo}>
            Quality Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
