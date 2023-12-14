"use client";

import { Header } from "@/Components/Header";
import style from "@/styles/showroom.module.scss";
import React from "react";
import img from "@/public/text.jpg";
import Image from "next/image";
import img1 from "@/imgs/Product 1.jpg";
import img2 from "@/imgs/Product 2.jpg";
import img3 from "@/imgs/Product 3.jpg";
import img4 from "@/imgs/Product 4.jpg";
import img5 from "@/imgs/Product 1.jpg";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <div className={style.showroom}>
      <Image src={img} className={style.img} alt="" />
      <div className={style.galleryimg}>
        <div className={style.box}>
          <span style={{ "--i": 1 }}>
            <Image src={img1} alt="" />
          </span>
          <span style={{ "--i": 2 }}>
            <Image src={img2} alt="" />
          </span>
          <span style={{ "--i": 3 }}>
            <Image src={img3} alt="" />
          </span>
          <span style={{ "--i": 4 }}>
            <Image src={img4} alt="" />
          </span>
          <span style={{ "--i": 5 }}>
            <Image src={img5} alt="" />
          </span>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
