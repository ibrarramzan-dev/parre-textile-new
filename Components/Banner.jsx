import React from 'react'
import Image  from 'next/image'
import img from "@/public/banner12.jpg"
import style from "@/styles/banner.module.scss"

const Banner = () => {
  return (
    <div className={style.bannerimg}>
      <Image src={img} alt='' />
    </div>
  )
}

export default Banner
