import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, 
{
  EffectFade,
  Navigation,
  Pagination,
  Autoplay
} 
from 'swiper/core';


import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "swiper/components/effect-fade/effect-fade.min.css"

SwiperCore.use([EffectFade,Navigation,Pagination, Autoplay]);

export function Slide(props: any) {
  return (
    <>
      <Swiper spaceBetween={30} effect={'fade'} autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
        }}  navigation={true} pagination={{
          "clickable": false
        }} className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}