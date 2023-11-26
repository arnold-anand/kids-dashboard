import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
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
            <img src={imageUrl} alt={`swiper-slide-${index}`} className="h-72 mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
