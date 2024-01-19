import React from "react";
import style from "@/styles/navigation.module.scss";
import Link from "next/link";
import { Gentium_Book_Plus } from "next/font/google";

const gentium_book_plus = Gentium_Book_Plus({
  weight: "400",
  subsets: ["latin"],
});
const Navigation = () => {
  return (
    <header className={style.links}>
      <Link href="/" className="navlink">
        <span className={gentium_book_plus.className}>HOME</span>
      </Link>
      <Link href="/About" className="navlink">
        <span className={gentium_book_plus.className}>ABOUT</span>
      </Link>
      <Link href="/Textiles" className="navlink">
        <span className={gentium_book_plus.className}>TEXTILES</span>
      </Link>
      <Link href="/Showrooms" className="navlink">
        <span className={gentium_book_plus.className}>SHOWROOMS</span>
      </Link>
      <Link href="/FAQs" className="navlink">
        <span className={gentium_book_plus.className}>FAQ&apos;s</span>
      </Link>
    </header>
  );
};

export default Navigation;
