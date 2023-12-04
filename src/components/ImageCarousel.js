import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import 'swiper/css/autoplay';

export default function ImageCarousel({ imageUrls }) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{ delay: 4000 }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper flex items-center" // Add flex and items-center classes
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className=''>
            <img src={imageUrl} alt={`swiper-slide-${index}`} className="h-[359px] w-[638px] mx-auto rounded" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
