"use client";

import style from "@/styles/Product.module.scss";
import { Modal } from "antd";
import { products } from "@/Components/productsArray";
import style1 from "@/styles/productDetails.module.scss";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import React, { useState, useEffect } from "react";
import { products as productData } from "./productsArray";
import Link from "next/link";
import {
  Arapey,
  Gentium_Book_Plus,
  Playfair_Display,
  Antic_Didone,
} from "next/font/google";
import Image from "next/image";
import Banner from "@/Components/Banner";

const arapey = Arapey({
  weight: "400",
  subsets: ["latin"],
});

const gentium_book_plus = Gentium_Book_Plus({
  weight: "400",
  subsets: ["latin"],
});

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
    setdata(productData.slice(0, 3));
  }, []);


  return (
    <div className={style.products}>
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
      <Banner />
      <h2 className={`${style.hometext} ${arapey.className}`}>
        Luxury Printed Textiles Exclusively for Discerning Interior Designers
      </h2>

      <div className={style.product}>
        <div className={style.product_list}>
          {data.map((product) => (
            <Product key={product._id} data={product} />
          ))}
        </div>
      </div>

      <div className={style.showmore}>
        <Link href={"/Textiles"}>
          <button>Browse the Collection</button>
        </Link>
      </div>
    </div>
  );
};

const Product = ({ data }) => {
  const { productName1, productName2, imageLink, _id } = data;
  let id = _id;
  console.log(imageLink.src);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    setProductDetail(products.filter((product) => product._id === id)[0]);
  }, []);

  return (
    <>
      <button className={style.cardbutton} onClick={showModal}>
        <div className={style.card}>
          <div className={style.content}>
            <Image
              src={imageLink}
              width={300}
              className={style.waku}
              height={247}
              alt=""
            />
          </div>
          <div className={style.title}>
            <h4 className={playfair_display.className}>{productName1}</h4>
            <p className={antic_didone.className}>{productName2}</p>
          </div>
        </div>
      </button>

      <Modal
        className={style1.modal}
        footer={null}
        open={isModalOpen}
        width={"100vw"}
        height={"50vh"}
        onCancel={handleCancel}
      >
        <div className={style1.product_detail}>
          <div className={style1.head}></div>
          <div className={style1.body}>
            <div className={style1.left}>
              <InnerImageZoom
                src={productDetail.imageLink}
                zoomSrc={productDetail.largeImageLink}
              />
            </div>
            <div className={style1.right}>
              <h2>
                Product Name: <span> {productDetail.productName1}</span>
              </h2>
              <h2>
                Material: <span>{productDetail.productName2}</span>{" "}
              </h2>
              {data.color === "Not Available" ? (
                ""
              ) : (
                <h2>
                  Color: <span> {data.color} </span>{" "}
                </h2>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductsPage;
