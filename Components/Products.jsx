"use client";

import style from "@/styles/Product.module.scss";
import React, { useState, useEffect } from "react";
import { products as productData } from "./productsArray";
import { Playfair_Display, Antic_Didone } from "next/font/google";
import Image from "next/image";
import style1 from "@/styles/productDetails.module.scss";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Modal } from "antd";
import { products } from "@/Components/productsArray";
import Link from "next/link";

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
    setdata(productData.slice(0, 10));
  }, []);
  const handleClick = () => {
    setdata((prevData) => [
      ...prevData,
      ...productData.slice(prevData.length, prevData.length + 10),
    ]);
  };

  return (
    <div className={style.products}>
      <p className={style.collection}>Our Premier Collection</p>
      <p className={style.collection1}>
        Please Email Sample Requests to{" "}
        <Link
          className={style.mail}
          href="mailto:SampleRequests@ParreTextile.com"
        >
          SampleRequests@ParreTextile.com
        </Link>
      </p>
      <div className={style.product}>
        <div className={style.product_list}>
          {data.map((product) => (
            <Product key={product._id} data={product} />
          ))}
        </div>
      </div>
      {data.length > 50 ? (
        <p className={style.collection2}>
          Please Email Sample Requests to{" "}
          <Link
            className={style.mail}
            href="mailto:SampleRequests@ParreTextile.com"
          >
            SampleRequests@ParreTextile.com
          </Link>
        </p>
      ) : (
        <>
          <div className={style.btn}>
            <button onClick={handleClick}>Show more</button>
          </div>
        </>
      )}
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
              className={style.waku}
              width={350}
              height={350}
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
        top={"0"}
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
