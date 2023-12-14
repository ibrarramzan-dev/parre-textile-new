"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import style from "@/styles/header.module.scss";
import Link from "next/link";
import { Antic_Didone } from "next/font/google";
import { IoMdSearch } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

const antic_didone = Antic_Didone({
  weight: "400",
  subsets: ["latin"],
});

export const Header = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWidth(window.innerWidth);
      }
      if (width > 1056) {
        setMenuOpen(false);
      }
      else {
        return
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "100%" },
  };

  return (
    <motion.header
      variants={variants}
      initial="closed"
      animate="open"
      className={style.header}
    >
      <nav className={style.navbar}>
        <div className={style.icons1}>
          <Link href={"/"}>
            <button className={style.btn}>
              <IoPersonCircleOutline />
            </button>
          </Link>
          <Link href={"/"}>
            <button className={style.btn}>
              <BsCart3 />
            </button>
          </Link>
        </div>
        <div className={style.navbar_logo}>
          <Link className={style.link} href={"/"}>
            <Image src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
        <div className={style.icons}>
          <button className={style.btn} onClick={openSearchModal}>
            <IoMdSearch />
          </button>
        </div>
        <button
          onClick={(handleClick) => {
            menuOpen === true ? setMenuOpen(false) : setMenuOpen(true);
            if(inputRef.current){
              inputRef.current.focus();
            }
          }}
          className={style.hamburger}
        >
          {menuOpen === true ? <RxCross2 /> : <VscThreeBars />}
        </button>
      </nav>
      <AnimatePresence>
        {searchModalOpen && <SearchMenu options={setSearchModalOpen} />}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && <Side_menu />}
      </AnimatePresence>
    </motion.header>
  );
};

// components/SearchMenu.js

const SearchMenu = ({ options }) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  }

  return (
    <motion.div
      className={style.search_modal}
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <div className={style.search_modal_header}>
        <div className={style.navbar_logo}>
          <Image src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className={style.searcmenu}>
          <button>
            <IoMdSearch />
          </button>
          <input
            type="text"
            // ref={inputRef}
            placeholder="Type words and Hit enter"
            className={antic_didone.className}
          />
        </div>
        <button className={style.closeIcon} onClick={() => options(false)}>
          <RxCross2 />
        </button>
      </div>
    </motion.div>
  );
};

const Side_menu = () => {
  const variants2 = {
    open: { opacity: 1, x: "0" },
    closed: { opacity: 0, x: "-500%" },
  };

  return (
    <motion.div
      className={style.side_menu}
      variants={variants2}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <div className={style.sear}>
        <input type="text" placeholder="Search Here" />
      </div>
      <div className={style.sidelink}>
        <Link href="/" className={style.hamlink}>
          Home
        </Link>
        <Link href="/About" className={style.hamlink}>
          About
        </Link>
        <Link href="/Products" className={style.hamlink}>
          Products
        </Link>
        <Link href="/Showrooms" className={style.hamlink}>
          Showroom
        </Link>
        <Link href="/Designer" className={style.hamlink}>
          Designer Quotes
        </Link>
      </div>
    </motion.div>
  )
}

export default SearchMenu;
