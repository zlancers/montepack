"use client";

import React, { useState } from "react";
import styles from "./features.module.css";
import { PiPhoneCallThin } from "react-icons/pi";
import featureBgImg from "../../../assets/featuresBg.jpg";
import feature1 from "../../../assets/feature1.png";
import feature2 from "../../../assets/feature2.png";
import feature3 from "../../../assets/feature3.png";
import feature4 from "../../../assets/feature4.png";
import feature5 from "../../../assets/feature5.png";

const featuresData = [
  {
    id: 1,
    title: "01. Vast Experience",
    imgLink: feature1,
    subTitle: "25 years of expertise in the moving industry",
    desc: "Founder-Director has over 25 years of expertise in the domestic & international moving industry.",
  },
  {
    id: 2,
    title: "02. World Wide Reach",
    imgLink: feature2,
    subTitle: "Global & Nationwide Reach",
    desc: "Wide-ranging global & domestic network of reliable partners.",
  },
  {
    id: 3,
    title: "03. Proficient Team",
    imgLink: feature3,
    subTitle: "Qualified experts and skilled packers",
    desc: "Our trained staff handle your possessions with utmost care.",
  },
  {
    id: 4,
    title: "04. Tailored Solutions",
    imgLink: feature4,
    subTitle: "Comprehensive, tailored & reliable services",
    desc: "We customize our services to meet your unique moving needs.",
  },
  {
    id: 5,
    title: "05. Insured & Bonded",
    imgLink: feature5,
    subTitle: "Comprehensive Insurance",
    desc: "Emphasises on client satisfaction and a stress-free moving process.",
  },
];

const Features = () => {
  const [activId, setActivId] = useState(1);

  const handleClick = (id) => {
    setActivId(id);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${featureBgImg.src})`,
      }}
      className={styles.featuresContainer}
    >
      <div
        className={styles.featuresInnerContainer}
        style={{
          backgroundImage: `url(${featuresData[activId - 1].imgLink.src})`,
        }}
      >
        <div className={styles.featuresSideBar}>
          {featuresData.map((data) => {
            return (
              <div
                className={styles.featuresSideBarBtn}
                key={data.id}
                onClick={() => handleClick(data.id)}
                style={{ color: activId === data.id ? "#1A7F45" : "#282F3B" }}
              >
                {data.title}
              </div>
            );
          })}

          <div className={styles.featuresSideBarContactBtn}>
            <div className={styles.featuresSideBarContactBtnIcon}>
              <PiPhoneCallThin className={styles.featuresSideBarContactIcon} />
            </div>
            <p>Call For Free Consultation</p>
          </div>
        </div>
        <div className={styles.featuresContent}>
          <h1 className={styles.featuresSubTitle}>
            {featuresData[activId - 1].subTitle}
          </h1>
          <p className={styles.featuresDesc}>
            {featuresData[activId - 1].desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
