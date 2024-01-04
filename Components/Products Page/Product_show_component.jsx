"use client";
import React, { useEffect, useState } from "react";
import style from "@/styles/productDetails.module.scss";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { products } from "@/Components/productsArray";
import { Libre_Bodoni } from "next/font/google";

const libre_bodoni = Libre_Bodoni({
  weight: "400",
  subsets: ["latin"],
});

const Product_show_component = ({ params }) => {
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    setProductDetail(products.filter((product) => product._id === params)[0]);
  }, []);

  return (
    <>
      <div className={style.product_detail}>
        <div className={style.head}>
        </div>
        <div className={style.body}>
          <div className={style.left}>
            <InnerImageZoom
              src={productDetail.imageLink}
              zoomSrc={productDetail.largeImageLink}
            />
          </div>
          <div className={style.right}>
            <h2>Product Name: {productDetail.productName1}</h2>
            <h2>Material: {productDetail.productName2}</h2>
            <h2>Color: {productDetail.color}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_show_component;
