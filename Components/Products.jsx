"use client";

import style from "@/styles/Product.module.scss";
import React, { useState, useEffect } from "react";
import { products as productData } from "./productsArray";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { Playfair_Display, Antic_Didone } from "next/font/google";
import Image from "next/image";

const playfair_display = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const antic_didone = Antic_Didone({
  weight: "400",
  subsets: ["latin"],
});

const ProductsPage = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(productData);
  }, []);

  return (
    <div className={style.products}>
      <p className={style.collection}>Our Premier Collection</p>
      <div className={style.product}>
        <div className={style.product_list}>
          {data.map((product) => (
            <Product key={product._id} data={product} />
          ))}
        </div>
      </div>

      {/* <div className={style.showmore}>
        <Link href={"/Products"}>
          <button>View More</button>
        </Link>
      </div> */}
    </div>
  );
};

const Product = ({ data }) => {
  const { productName, price, imageLink, _id } = data;
  let id = _id;
  console.log(imageLink.src);
  return (
    <div className={style.box}>
      <Image
        src={imageLink}
        className={`${style.img} ${style.overlay}`}
        width={350} // change image size in px.
        height={350} // change image size in px.
        alt=""
      />
      <div className={`${style.cardbody} ${style.overlay}`}></div>
      <div className={style.icons}>
        <div className={style.blank}></div>
        <button className={style.sideicons}>
          <FaRegHeart />
        </button>
        <button className={style.sideicons}>
          <BsCart3 />
        </button>
        <button className={style.sideicons}>
          <Link href={`/Product/${id}`}>
            <FaArrowRightLong />
          </Link>
        </button>
        <div className={style.title}>
          <h4 className={playfair_display.className}>{productName}</h4>
          <p className={antic_didone.className}>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
