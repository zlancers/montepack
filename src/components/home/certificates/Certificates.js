import Image from "next/image";
import React from "react";
import styles from "./certificates.module.css";
import certificate1 from "../../../assets/certificate1.png";
import certificate2 from "../../../assets/certificate2.png";
import certificate3 from "../../../assets/certificate3.png";
import certificate4 from "../../../assets/certificate4.png";
import certificate5 from "../../../assets/certificate5.png";
import certificate6 from "../../../assets/certificate6.png";
import achievement1 from "../../../assets/achievement1.png";

const certificatesData = [
  {
    id: 1,
    imgLink: certificate1,
  },
  {
    id: 2,
    imgLink: certificate2,
  },
  {
    id: 3,
    imgLink: certificate3,
  },
  {
    id: 4,
    imgLink: certificate4,
  },
  {
    id: 5,
    imgLink: certificate5,
  },
  {
    id: 6,
    imgLink: certificate6,
  },
];

const AchievementCard = () => {
  return (
    <div className={styles.achievementCardContainer}>
      <div className={styles.achievementCardImgDiv}>
        <Image
          src={achievement1}
          alt="certificate"
          className={styles.achievementCardImg}
        />
      </div>
      <div className={styles.achievementCardInfoDiv}>
        <p className={styles.achievementNo}>5,000 +</p>
        <h1 className={styles.achievementCardTitle}>
          Families successfully relocate in a year around the world
        </h1>
        <p className={styles.achievementCardDesc}>
          Servile successfully relocates close to 5000 families in a year around
          the world. With our offices in Mumbai, Pune, Bangalore, Delhi,
          Chennai, Hyderabad, Kolkata, we strive to make your move memorable.
        </p>
      </div>
    </div>
  );
};

const Certificates = () => {
  return (
    <div className={styles.certificateContainer}>
      <div className={styles.achievementCardDiv}>
        <AchievementCard />
      </div>
      <h1 className={styles.certificateContainerTitle}>Certificates</h1>
      <div className={styles.certificateContainerFlexBox}>
        {certificatesData.map((data) => {
          return (
            <div key={data.id} className={styles.certificateImgDiv}>
              <Image
                src={data.imgLink}
                alt="Certificates"
                className={styles.certificateImg}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
