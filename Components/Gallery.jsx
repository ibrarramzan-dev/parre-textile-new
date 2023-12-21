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
              src="https://6583af23b9dda70008c7b0d1--brilliant-flan-7fb4e6.netlify.app/images/C1%20Des%202%20Col%205.jpg"
              width={100} // change image size in px.
              height={100} // change image size in px.
              alt=""
            />
          </span>
          <span style={{ "--i": 2 }}>
            <Image
              src="https://6583af23b9dda70008c7b0d1--brilliant-flan-7fb4e6.netlify.app/images/C1%20Des%202%20Combo%201.jpg"
              width={100} // change image size in px.
              height={100} // change image size in px.
              alt=""
            />
          </span>
          <span style={{ "--i": 3 }}>
            <Image
              src="https://6583af23b9dda70008c7b0d1--brilliant-flan-7fb4e6.netlify.app/images/C1%20Des%202%20Combo%204%2028%20Jul.jpg"
              width={100}
              height={100}
              alt=""
            />
          </span>
          <span style={{ "--i": 4 }}>
            <Image
              src="https://6583af23b9dda70008c7b0d1--brilliant-flan-7fb4e6.netlify.app/images/C1%20Des%202%20Combo%206%20Feb%2023.jpg"
              width={100}
              height={100}
              alt=""
            />
          </span>
          <span style={{ "--i": 5 }}>
            <Image
              src="https://6583af23b9dda70008c7b0d1--brilliant-flan-7fb4e6.netlify.app/images/C1%20Des%202%20Combo%207%20%20%2015%20July%202023.jpg"
              width={100}
              height={100}
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};
