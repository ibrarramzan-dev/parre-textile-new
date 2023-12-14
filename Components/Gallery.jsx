"use client";

import style from "@/styles/gallery.module.scss";
import React from "react";
import Image from "next/image";
import { PT_Serif } from "next/font/google";
import img1 from "@/imgs/Product 1.jpg";
import img2 from "@/imgs/Product 2.jpg";
import img3 from "@/imgs/Product 1.jpg";
import img4 from "@/imgs/Product 4.jpg";
import img5 from "@/imgs/Product 3.jpg";

const pt_serif = PT_Serif({
  weight: "400",
  subsets: ["latin"],
});

export const Gallery = () => {
  return (
    <div>
      <div className={style.galleryimg}>
        <h1 className={`${style.header} ${pt_serif.className}`}>Gallery</h1>
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
  );
};
