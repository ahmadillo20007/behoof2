import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Grid, Pagination } from "swiper";
import SliderItem from "./SliderItem/SliderItem";

export default function MySwiper  () {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="MySwiper"
      >
   <SliderItem/>

      </Swiper>
    </>
  );
}
