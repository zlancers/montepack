import React from "react";
import { ServiceHomeData } from "../../../utils/index";
import Image from "next/image";
import Link from "next/link";
import serviceHome1 from "../../../assets/serviceHome1.png";
import styles from "./services.module.css";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Services = () => {
  return (
    <div className={styles.serviceHomeContainer}>
      <h1 className={styles.serviceTitle}>Our Services</h1>
      <p className={styles.serviceSubTitle}>
        We work with your company to identify position requirements, implement
        recruitment programs, and initiate employee assessments that maximize
        recruitment efforts
      </p>

      <div className={styles.serviceCardDiv}>
        {ServiceHomeData.map((data) => {
          return (
            <div className={styles.serviceCard} key={data.id}>
              <div className={styles.serviceCardImgDiv}>
                <Image
                  src={data.imgLink}
                  alt="service"
                  className={styles.serviceCardImg}
                />
              </div>
              <Link href={"/"} className={styles.serviceCardTitle}>
                {data.title}
              </Link>
              <p className={styles.serviceCardSubTitle}>{data.desc}</p>
              <div className={styles.serviceCardKnowMoreDiv}>
                <Link href={"/"}>Know More</Link>
                <LiaLongArrowAltRightSolid />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
