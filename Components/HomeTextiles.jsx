"use client";

import style from "@/styles/home_textiles.module.scss";
import React from "react";
import img1 from "@/imgs/Product 1.jpg";
import img2 from "@/imgs/Product 2.jpg";
import img3 from "@/imgs/Product 3.jpg";
import Image from "next/image";

export const HomeTextiles = () => {
    return (
        <>
            <div className={style.hometext}>
                <div className={style.right}>
                    <h1 className={style.about_p}>
                        Browse Our Premiere Collection
                    </h1>
                </div>
                <div className={style.left}>
                    <div className={style.container}>
                        <Image src={img1} alt="" />
                        <Image src={img2} alt="" />
                        <Image src={img3} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};
