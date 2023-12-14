"use client";

import { Header } from "@/Components/Header";
import style from "@/styles/about.module.scss";
import React from "react";
import {
  FaRegLaughWink,
  FaBuilding,
  FaRegCalendarCheck,
  FaRegStickyNote,
} from "react-icons/fa";
import img from "@/public/about1.jpg";
import img1 from "@/public/t1.jpg";
import img2 from "@/public/t2.jpg";
import img3 from "@/public/t3.jpg";
import img4 from "@/public/t4.jpg";
import img20 from "@/public/l1.png";
import img7 from "@/public/l2.png";
import img8 from "@/public/l3.png";
import img9 from "@/public/l4.png";
import img10 from "@/public/l5.png";
import img11 from "@/public/l6.png";
import img12 from "@/public/l7.png";
import img13 from "@/public/l8.png";
import Image from "next/image";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.about}>
        <div className={style.left}>
          <h2>We Have Everything You Need?</h2>
          <p className={style.about_p}>
            Faded short sleeves t-shirt with high neckline.Soft and stretchy
            material for a comfortable fit.Accessoorize with a straw hat and you
            are ready for summer!
          </p>
          <p className={style.text}>Sample Ordered List</p>
          <li className={style.bullet}>
            Comodous in tempor ullamcorper miacullus
          </li>
          <li className={style.bullet}>
            Pellentesque vitae neque mollis urna mattis laoreet.
          </li>
          <li className={style.bullet}>Divamus sit amet purus justo.</li>
          <li className={style.bullet}>
            Comodous in tempor ullamcorper miacullus
          </li>
          <li className={style.bullet}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </li>
          <div className={style.section}>
            <div className={style.btndiv}>
              <button className={style.btn}>CONTACT US</button>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <Image src={img} className={style.Image} alt="" />
        </div>
      </div>
      <Acheviment />
      <Skills />
      <Work />
      <Team />
      <Client />
      <Footer />
    </>
  );
}

const Acheviment = () => {
  return (
    <div className={style.ment}>
      <div className={style.lef}>
        <h3>ACHIVEMENTS</h3>
        <h1>
          Milestone  Achieved
        </h1>
      </div>
      <div className={style.rig}>
        <div className={style.r}>
          <div className={style.exp}>
            <h2>25+</h2>
            <p>Years Experience</p>
          </div>
          <div className={style.exp}>
            <h2>1450+</h2>
            <p>Textile Project</p>
          </div>
        </div>
        <div className={style.r}>
          <div className={style.exp}>
            <h2>87+</h2>
            <p>Award Winnings</p>
          </div>
          <div className={style.exp}>
            <h2>999+</h2>
            <p>Positive Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <div className={style.skill}>
        <div className={style.rit}>
          <h2>OUR SKILLS</h2>
          <p className={style.abou_p}>
            Enhancing Your Inner <br /> Beauty
          </p>
          <div className={style.percen}>
            <div className={style.tage}>
              <h1>90%</h1>
              <h3>Textile Services</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className={style.tage}>
              <h1>85%</h1>
              <h3>Textile Material</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>

          <div className={style.percen}>
            <div className={style.tage}>
              <h1>92%</h1>
              <h3>Sewing Services</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className={style.tage}>
              <h1>85%</h1>
              <h3>Design Services</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Work = () => {
  return (
    <>
      <div className={style.work}>
        <div className={style.left1}>
          <h4>HOW WE WORK</h4>
          <p>
            Bringing Your the Elements <br /> of Style
          </p>
        </div>
        <div className={style.right1}>
          <div className={style.rgt1}>
            <div className={style.secti}>
              <FaRegCalendarCheck className={style.ico} />
              <h1>Appointment</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className={style.secti}>
              <FaRegStickyNote className={style.ico} />
              <h1>Choose Fabric</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className={style.rgt1}>
            <div className={style.secti}>
              <FaBuilding className={style.ico} />
              <h1>Production</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className={style.secti}>
              <FaRegLaughWink className={style.ico} />
              <h1>Final Result</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Team = () => {
  return (
    <>
      <div className={style.team}>
        <div className={style.lef1}>
          <h4>OUR TEAM</h4>
          <p>Meet The Professionals</p>
        </div>
        <div className={style.rigt1}>
          <div className={style.sect}>
            <Image src={img1} alt="" />
            <h1>Ricky Martin</h1>
            <p>MANAGER</p>
          </div>
          <div className={style.sect}>
            <Image src={img2} alt="" />
            <h1>Linna Stones</h1>
            <p>MARKETING</p>
          </div>
          <div className={style.sect}>
            <Image src={img3} alt="" />
            <h1>Fanny Lawson</h1>
            <p>HR STAFF</p>
          </div>
          <div className={style.sect}>
            <Image src={img4} alt="" />
            <h1>Paula Frains</h1>
            <p>DESIGNER</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Client = () => {
  return (
    <>
      <div className={style.client}>
        <h2>OUR CLIENT</h2>
        <div className={style.cli}>
          <marquee scrollamount="10" height="500" width="1300" direction="right" className={style.imges}>
            <Image src={img20} height={"170"} alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src={img7} height={"170"} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src={img8} height={"170"} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src={img9} height={"170"} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src={img10} height={"170"} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src={img11} height={"170"} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src={img12} height={"170"} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src={img13} height={"170"} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </marquee>
          <div className={style.bottom}></div>
        </div>
      </div>
    </>
  );
};
