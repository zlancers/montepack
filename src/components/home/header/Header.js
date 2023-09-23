"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch, IoIosArrowForward } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { BiChevronDown } from "react-icons/bi";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone, HiMenu } from "react-icons/hi";
import {
  MdLocationOn,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

import styles from "./header.module.css";
import { Popover } from "antd";

const aboutPopover = () => {
  return (
    <div className={styles.popoverDiv}>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Company
      </Link>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Client & Testimonials
      </Link>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Career
      </Link>
    </div>
  );
};

const resourcesPopover = () => {
  return (
    <div className={styles.popoverDiv}>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Blogs
      </Link>
      <Link href={"/"} className={styles.popoverSubMenu}>
        FAQ&#39;s
      </Link>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Moving Checklist
      </Link>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Moving Tips
      </Link>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Gallery
      </Link>
    </div>
  );
};

const policiesPopover = () => {
  return (
    <div className={styles.popoverDiv}>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Anti-Bribery and Curruption Policy
      </Link>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Code of Cunduct Policy
      </Link>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Environment Policy
      </Link>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Privacy Policy
      </Link>
      <Link href={"/"} className={styles.popoverSubMenu}>
        Quality Policy
      </Link>
    </div>
  );
};

const servicesPopover = () => {
  return (
    <div className={styles.popoverFlexDiv}>
      <div className={styles.popoverDiv}>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          Packing & Moving
        </Link>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          Corporate Moving
        </Link>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          Fine Art Moving
        </Link>
      </div>
      <div className={styles.popoverDiv}>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          Pet Moving
        </Link>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          Vehicle Shifting
        </Link>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          Storage Facility
        </Link>
      </div>
      <div className={styles.popoverDiv}>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          Exhibition Handling
        </Link>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          Visa & Immigration
        </Link>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          Home Search
        </Link>
      </div>
      <div className={styles.popoverDiv}>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          Cross Culture Training
        </Link>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          School Search
        </Link>
        <Link href={"/"} className={styles.popoverSubMenu}>
          <MdOutlineKeyboardDoubleArrowRight />
          City Orientation
        </Link>
      </div>
    </div>
  );
};

const MobileHeader = ({ setIsActive }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (submenu) => {
    if (openSubMenu === submenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };
  // const handleCloseMenu = () => {
  //   setOpenSubMenu(null);
  // };
  return (
    <div className={styles.mobileHeaderContainer}>
      <div className={styles.mobileHeaderCloseBtn}>
        <GrClose color="#53525d" onClick={() => setIsActive(false)} />
      </div>
      <div className={styles.mobileHeaderSearchDiv}>
        <input
          className={styles.mobileHeaderSearchInput}
          type="text"
          placeholder="Search..."
        />
        <IoIosSearch className={styles.mobileHeaderSearchIcon} />
      </div>
      <div>
        <div className={styles.mobileMenuContainer}>
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              Home
            </Link>
          </div>
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              About
            </Link>
            <BiChevronDown onClick={() => handleSubMenuClick("About")} />
          </div>
          {openSubMenu === "About" ? (
            <div className={styles.subMenuContainer}>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Company
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Client & Testimonials
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Career
                </Link>
              </div>
            </div>
          ) : null}
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              Services
            </Link>
            <BiChevronDown onClick={() => handleSubMenuClick("Services")} />
          </div>
          {openSubMenu === "Services" ? (
            <div className={styles.subMenuContainer}>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Packing & Moving
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Corporate Moving
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Fine Art Moving
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Pet Moving
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Vehicle Shifting
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Storage Facility
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Exhibition Handling
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Visa & Immigration
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Home Search
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Cross Culture Training
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  School Search
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  City Orientation
                </Link>
              </div>
            </div>
          ) : null}
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              Resources
            </Link>
            <BiChevronDown onClick={() => handleSubMenuClick("Resources")} />
          </div>
          {openSubMenu === "Resources" ? (
            <div className={styles.subMenuContainer}>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Blogs
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  FAQ&#39;s
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Moving Checklist
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Moving Tips
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Gallery
                </Link>
              </div>
            </div>
          ) : null}
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              Policies
            </Link>
            <BiChevronDown onClick={() => handleSubMenuClick("Policies")} />
          </div>
          {openSubMenu === "Policies" ? (
            <div className={styles.subMenuContainer}>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Anti-Bribery and Curruption Policy
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Code of Cunduct Policy
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Environment Policy
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Privacy Policy
                </Link>
              </div>
              <div className={styles.subMenuDiv}>
                <IoIosArrowForward className={styles.mobileSubMenuIcon} />
                <Link href={"/"} className={styles.mobileMenu}>
                  Quality Policy
                </Link>
              </div>
            </div>
          ) : null}
          <div className={styles.mobileMenuDiv}>
            <Link href={"/"} className={styles.mobileMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={styles.headerBox}>
        <div className={styles.headerLabelDiv}>
          <div className={styles.headerLabelLeftDiv}>
            <p className={styles.headerLabelInfo}>
              <MdLocationOn />
              Best International Movers & Packers
            </p>
            <Link href={"/"} className={styles.headerLabelInfo}>
              <HiMail />
              info@servilerelocations.com
            </Link>
          </div>
          <div className={styles.headerLabelLeftDiv}>
            <Link href={"/"} className={styles.headerLabelInfo}>
              <HiPhone /> + 91 83605 00600
            </Link>
            <div className={styles.headerMediaDiv}>
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
        </div>
        <div className={styles.headerContainer}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" className={styles.logoImg} />
          </Link>
          <div className={styles.headerLinkSection}>
            <div className={styles.linkSection}>
              <Link href={"/"} className={styles.linkStyle}>
                Home
              </Link>
              <Popover placement="bottom" content={aboutPopover}>
                <div className={styles.linkDiv}>
                  <Link href={"/"} className={styles.linkStyle}>
                    About
                  </Link>
                  <RiArrowDropDownLine />
                </div>
              </Popover>
              <Popover placement="bottom" content={servicesPopover}>
                <div className={styles.linkDiv}>
                  <Link href={"/"} className={styles.linkStyle}>
                    Services
                  </Link>
                  <RiArrowDropDownLine />
                </div>
              </Popover>
              <Popover placement="bottom" content={resourcesPopover}>
                <div className={styles.linkDiv}>
                  <Link href={"/"} className={styles.linkStyle}>
                    Resources
                  </Link>
                  <RiArrowDropDownLine />
                </div>
              </Popover>
              <Popover placement="bottom" content={policiesPopover}>
                <div className={styles.linkDiv}>
                  <Link href={"/"} className={styles.linkStyle}>
                    Policies
                  </Link>
                  <RiArrowDropDownLine />
                </div>
              </Popover>
              <Link href={"/"} className={styles.linkStyle}>
                Contact
              </Link>
            </div>
            <div className={styles.searchDiv}>
              <IoIosSearch className={styles.searchIcon} />
              <Link href={"/"} className={styles.requestBtn}>
                Request a Quote
              </Link>
            </div>
          </div>
          <HiMenu
            className={styles.menuBtn}
            onClick={() => setIsActive(true)}
          />
        </div>
      </div>
      {isActive ? <MobileHeader setIsActive={setIsActive} /> : null}
    </>
  );
};

export default Header;
