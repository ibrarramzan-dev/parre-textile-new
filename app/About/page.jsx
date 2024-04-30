"use client";

import { Header } from "@/Components/Header";
import style from "@/styles/about.module.scss";
import React from "react";
import img from "@/public/aboutimg.png";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <div className={style.about}>
        <div className={style.left}>
          <h1>About Us</h1>
          <Image src={img} className={style.Image} alt="" />
          <h2>Parre&apos; Textile</h2>
          <div className={style.color}>
            <p className={style.about_p}>
              Parre' Textile is the culmination of a wonderful 40-year journey in
              the Decorative Textile and Home Furnishings Industry. Foundations of design were formed in the early years with the likes
              of Schumacher, Osborne &amp; Little, Jim Thompson and many fine
              boutique companies throughout the decades. The company represents a love and a desire to bring beautiful,
              printed textiles of color to interior designers to design the finest
              homes worldwide. “Franglasiam”, is what describes the company best. A little bit of
              French, A bit of English, a bit of Asia and a bit American. Parre' is a privately held, family run company made up of a Father
              and his 2 children as the management team.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
