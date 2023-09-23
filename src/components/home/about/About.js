import Image from "next/image";
import React from "react";
import homeAbout from "../../../assets/homeAbout.png";
import styles from "./about.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.homeAboutContainer}>
      <div className={styles.aboutLeftSec}>
        <h1 className={styles.aboutTitle}>About Servile Relocations</h1>
        <p className={styles.aboutDesc}>
          Setting out with a dream to connect people and understanding that
          moving can be a challenging task. Mr. Mobin Shaikh born, raised,
          educated in Mumbai and started a career and staying true to the local
          roots established Servile Relocations Private Limited in year 2009
          with a motto “Customer satisfaction is the highest achievement” As a
          relocator, his experience and practice consist of an eclectic mix of
          projects with residential and commercial relocations.
        </p>
        <p className={styles.aboutTagLine}>
          Servile believes
          <span> “A right partner can make all the difference!”</span>
        </p>
        <Link href={"/"} className={styles.aboutReadMoreBtn}>Read More</Link>
      </div>
      <div className={styles.aboutRightSec}>
        <Image
          src={homeAbout}
          alt="home about section"
          className={styles.aboutImg}
        />
      </div>
    </div>
  );
};

export default About;
