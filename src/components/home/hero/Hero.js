"use client";

import React from "react";
import styles from "./hero.module.css";
import hero1 from "../../../assets/hero1.png";
import hero2 from "../../../assets/hero2.png";
import hero3 from "../../../assets/hero3.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const heroData = [
  {
    id: 1,
    title: "Servile Relocations We Move With Care",
    imgLink: hero2,
  },
  {
    id: 2,
    title: "Our motto “Customer Satisfaction is the highest achievement”",
    imgLink: hero1,
  },
  {
    id: 3,
    title: "Relocate with Ease: Trust the Experts! Servile Relocations",
    imgLink: hero3,
  },
];

const Hero = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {heroData.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div
                className={styles.heroCarousalContainer}
                style={{ backgroundImage: `url(${data.imgLink.src})` }}
              >
                <h1 className={styles.heroContainerTitle}>{data.title}</h1>
                <div className={styles.heroContainerBtnDiv}>
                  <button className={styles.heroContainerAboutBtn}>
                    About Us
                  </button>
                  <button className={styles.heroContainerServiceBtn}>
                    Our Service
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
