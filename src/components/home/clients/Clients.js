"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import styles from "./clients.module.css";
import clientIcon1 from "../../../assets/clientIcon1.png";
import clientIcon2 from "../../../assets/clientIcon2.png";
import clientIcon3 from "../../../assets/clientIcon3.png";
import clientIcon4 from "../../../assets/clientIcon4.png";

import client1 from "../../../assets/client1.png";
import client2 from "../../../assets/client2.png";
import client3 from "../../../assets/client3.png";
import client4 from "../../../assets/client4.png";
import client5 from "../../../assets/client5.png";
import client6 from "../../../assets/client6.png";
import client7 from "../../../assets/client7.png";
import client8 from "../../../assets/client8.png";
import client9 from "../../../assets/client9.png";
import client10 from "../../../assets/client10.png";
import client11 from "../../../assets/client11.png";
import client12 from "../../../assets/client12.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const acievementsNumberData = [
  {
    id: 1,
    iconImg: clientIcon1,
    number: 8,
    title: "Offices in India",
  },
  {
    id: 2,
    iconImg: clientIcon2,
    number: 75,
    title: "Experienced Staff",
  },
  {
    id: 3,
    iconImg: clientIcon3,
    number: 150,
    title: "Countries Serving",
  },
  {
    id: 4,
    iconImg: clientIcon4,
    number: 14,
    title: "Years of Experiences",
  },
];

const clientData = [
  { id: 1, clientImg: client1 },
  { id: 2, clientImg: client2 },
  { id: 3, clientImg: client3 },
  { id: 4, clientImg: client4 },
  { id: 5, clientImg: client5 },
  { id: 6, clientImg: client6 },
  { id: 7, clientImg: client7 },
  { id: 8, clientImg: client8 },
  { id: 9, clientImg: client9 },
  { id: 10, clientImg: client10 },
  { id: 11, clientImg: client11 },
  { id: 12, clientImg: client12 },
];

const Clients = () => {
  return (
    <div className={styles.clientsComponent}>
      <div className={styles.achievementsNoBox}>
        {acievementsNumberData.map((data) => {
          return (
            <div key={data.id} className={styles.achievementsDiv}>
              <div className={styles.achievementsIconDiv}>
                <div className={styles.achievementsImgDiv}>
                  <Image
                    src={data.iconImg}
                    alt="client icon"
                    className={styles.achievementsImgIcon}
                  />
                </div>
                <p className={styles.achievementsNo}>
                  <CountUp duration={2.75} end={data.number} />
                </p>
                <span className={styles.achievementsNoAddIcon}>+</span>
              </div>
              <p className={styles.achievementsTitle}>{data.title}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.clientFlexDiv}>
        <div>
          <Swiper
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={10}
            //   pagination={{
            //     clickable: true,
            //   }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              "@1.75": {
                slidesPerView: 5,
                spaceBetween: 60,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {clientData.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <div className={styles.certificateImgDiv}>
                    <Image
                      src={data.clientImg}
                      alt="Certificates"
                      className={styles.certificateImg}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={styles.serviceCardKnowMoreDiv}>
          <Link href={"/"}>See More Clients</Link>
          <LiaLongArrowAltRightSolid />
        </div>
      </div>
    </div>
  );
};

export default Clients;
