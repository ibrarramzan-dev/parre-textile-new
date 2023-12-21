"use client";

import style from "@/styles/gallery.module.scss";
import React from "react";
import Image from "next/image";
import { PT_Serif, Arapey } from "next/font/google";

const pt_serif = PT_Serif({
  weight: "400",
  subsets: ["latin"],
});

const arapey = Arapey({
  weight: "400",
  subsets: ["latin"],
});

export const Gallery = () => {
  return (
    <div>
      <div className={style.galleryimg}>
        <h1 className={`${style.header} ${arapey.className}`}>Gallery</h1>
        <div className={style.box}>
          <span style={{ "--i": 1 }}>
            <Image
              src="https://lh3.googleusercontent.com/pw/ABLVV87l57BCfA_yRtq-bBo2x1y6N27oZmktTn-Y95lnW55wSgC6xIAcWzrAilcEerfYOnsyG1d3ok_XvLZax31_5zFO54OCUIer2rP443D-nDtKrlTlpNJpj8y8EZH8tQE1OlHFBczRd27NqE5uNJihlPar=w1320-h831-s-no-gm?authuser=0"
              width={100} // change image size in px.
              height={100} // change image size in px.
              alt=""
            />
          </span>
          <span style={{ "--i": 2 }}>
            <Image
              src="https://lh3.googleusercontent.com/pw/ABLVV86jPQIhEfItIgkLQXQ8UzHcg61gnUEEAvMEWTsBNiy_k2QFbVJt1kenfFWhUaRrbCogtbw694tIWpwLTDsAJcUpwpf3PXxgzfv_h0X8PhQKYmkswghkd142hM6pFtoX6otPSg5-kxDw75TSw4rRI-bq=w1320-h831-s-no-gm?authuser=0"
              width={100} // change image size in px.
              height={100} // change image size in px.
              alt=""
            />
          </span>
          <span style={{ "--i": 3 }}>
            <Image src="https://lh3.googleusercontent.com/pw/ABLVV84tKrovDT-enJpN3uyMrPkHISEdsUcieqbhYO0QZ8JzzLnnXhGzsqdr6eWpp_cIlOJUK4RzJbtAo58Uh4n-qEb2n70KYbVAbCehtEJTEdmp7GiwvYU5GwATVCzFLRgYtLMg7DAw6TAE9unPKjQztZAh=w995-h903-s-no-gm?authuser=0" width={100} height={100} alt="" />
          </span>
          <span style={{ "--i": 4 }}>
            <Image src="https://lh3.googleusercontent.com/pw/ABLVV84hfH2zab6ALXuJ6bmpw1qSIuZymfktAGFkKICJ9ypvDSc5o1cK2IQ8iPUOoHTRO9T5-xSE-n4WaQmBaPTBd8PgDtbbEdsjcOPjOWUH6tge3hk6srvnyQWnC-LUoQpkOTR_y_e691-Q5ON_lzycVf6N=w1318-h903-s-no-gm?authuser=0" width={100} height={100} alt="" />
          </span>
          <span style={{ "--i": 5 }}>
            <Image src="https://lh3.googleusercontent.com/pw/ABLVV85rzXMiuw2iGyuI_uFJgAtMmrqvIT3H9wJujw7LBfM9pF3eaqmYPr2X8OM4KK9eM7GhnYNXqIhN0Eye6n5ipgRfxa3lbhxigRnzJ3aDTDtZI2fWWpsZBppt5r3avkchyyKkwAlLwiij90JuHyOgRTdt=w995-h903-s-no-gm?authuser=0" width={100} height={100} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};
