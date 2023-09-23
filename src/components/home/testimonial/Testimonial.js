"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { testimonialData } from "../../../utils/index";
import clientIcon4 from "../../../assets/clientIcon4.png";
import testimonialImg from "../../../assets/testimonialImg.png";
import testimonialBgImg from "../../../assets/testimonialBgImg.png";
import styles from "./testimonial.module.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex >= 1) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < 9) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const currentTestimonial = testimonialData[currentIndex];
  return (
    <div
      className={styles.testimonialContainer}
      style={{ backgroundImage: `url(${testimonialBgImg.src})` }}
    >
      <div className={styles.testimonialImgDiv}>
        <Image
          className={styles.testimonialImg}
          src={testimonialImg}
          alt="testimonials hero"
        />
      </div>
      <div className={styles.testimonialInfoDiv}>
        <h1 className={styles.testimonialTitle}>Customers Experience</h1>
        <div className={styles.testimoniaRatings}>
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
        </div>
        <div className={styles.testimonialDiv}>
          <div className={styles.testimonialSubInfoDiv}>
            <div className={styles.testimonialIconDiv}>
              <Image
                src={clientIcon4}
                alt="client icon"
                className={styles.testimonialImgIcon}
              />
            </div>
            <div className={styles.testimonialUserDiv}>
              <p className={styles.testimonialName}>
                {currentTestimonial.testimonialUser}
              </p>
              <p className={styles.testimonialPost}>
                {currentTestimonial.post}
              </p>
            </div>
          </div>
          <p className={styles.testimonialData}>
            {currentTestimonial.testimonial}
          </p>
        </div>
        <div className={styles.testimonialNavigationDiv}>
          <BsArrowLeft
            onClick={handlePrevClick}
            color={currentIndex === 0 ? "#1d446e" : "#fff"}
          />
          <p className={styles.testimonialpage}>
            <span>{currentTestimonial.id}</span> / {testimonialData.length}
          </p>
          <BsArrowRight
            onClick={handleNextClick}
            color={currentIndex === 9 ? "#1d446e" : "#fff"}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
