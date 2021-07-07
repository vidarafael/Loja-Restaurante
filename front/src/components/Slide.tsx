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
import 'swiper/components/effect-fade/effect-fade.scss';
import '../styles/components/slide.css'

SwiperCore.use([EffectFade,Navigation,Pagination, Autoplay]);

export function Slide(props: any) {
  const arrayDeImg = 
  [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg"
  ]

  return (
    <>
      <div className="swiperzim">
        <Swiper 
          effect={'fade'} autoplay={{
          "delay": 1000,
          "disableOnInteraction": false
          }}
          speed={1000}
          loop={true}
          allowTouchMove={false}
          className="slidezim"
        >
          {arrayDeImg.map((e, index) => {
            return <SwiperSlide className="swiperSlide"><img src={e} alt="index"/> <h1>{index}</h1></SwiperSlide>
          })}
        </Swiper>
      </div>
      
    </>
  )
}