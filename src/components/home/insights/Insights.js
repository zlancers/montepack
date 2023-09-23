import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BiMessageDetail } from "react-icons/bi";
import Link from "next/link";
import insights1 from "../../../assets/insights1.png";
import insights2 from "../../../assets/insights2.png";
import insights3 from "../../../assets/insights3.png";
import styles from "./insights.module.css";

const insightsData = [
  {
    id: 1,
    imgLink: insights1,
    date: "July 31, 2023",
    title: "We are experienced and expert in the business of logistics",
    subTitle:
      "We have the latest fleet of advanced green carriers that provides high fuel efficiency, expert and licensed team of drivers,",
  },
  {
    id: 2,
    imgLink: insights2,
    date: "October 8, 2021",
    title: "Top benefits of hiring our trucking service",
    subTitle:
      "Moving freight is a tough task that needs experience and expertise, because there is a lot at stack. Only the",
  },
  {
    id: 3,
    imgLink: insights3,
    date: "July 20, 2023",
    title:
      "Our trucking service ensures you best quality services at all times",
    subTitle:
      "Moving freight is a tough task that needs experience and expertise, because there is a lot at stack. Only the",
  },
];

const Insights = () => {
  return (
    <div className={styles.insightsContainer}>
      <h1 className={styles.insightsContainerTitle}>Insights & Intelligence</h1>
      <div className={styles.insightsFlex}>
        {insightsData.map((data) => {
          return (
            <div key={data.id} className={styles.insightsCard}>
              <div
                className={styles.insightsImgDiv}
                style={{ backgroundImage: `url(${data.imgLink.src})` }}
              >
                <span className={styles.insightsDateTag}>{data.date}</span>
              </div>
              <div className={styles.insightsInfoBox}>
                <div className={styles.insightsActionBox}>
                  <div className={styles.insightsActionDiv}>
                    <FaUser color="#078586" />
                    <p>admin</p>
                  </div>
                  <p>|</p>
                  <div className={styles.insightsActionDiv}>
                    <BiMessageDetail />
                    <p>Comments Off</p>
                  </div>
                </div>
                <div className={styles.insightsInfoDiv}>
                  <h3 className={styles.insightsInfoTitle}>{data.title}</h3>
                  <p className={styles.insightsInfoSubTitle}>{data.subTitle}</p>
                </div>
                <div className={styles.insightsCardReadMoreDiv}>
                  <Link href={"/"}>Read More</Link>
                  <LiaLongArrowAltRightSolid />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Insights;
