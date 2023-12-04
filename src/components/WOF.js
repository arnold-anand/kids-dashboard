import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/helper/supabaseClient';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

export default function WOF() {
  const [wof, setwof] = useState([]);
  const [profileImages, setProfileImages] = useState([]);
  
  useEffect(() => {
    getWofDetails();
  }, []);
  
  useEffect(() => {
    if (wof.length > 0) {
      getWofImages();
    }
  }, [wof]);
  
  async function getWofDetails() {
    let { data } = await supabase.from("wof").select();
    setwof(data);
  }
  
  function getWofImages(){
    let images = [];
    for (let index = 0; index < wof.length; index++) {
        images.push("https://rkiclrbeqyhahulzrznr.supabase.co/storage/v1/object/public/wof/"+wof[index]["image"]);
    }
    setProfileImages(images);
  }
  
  return (
    <div className='w-[25%] h-[100%] border  rounded-xl p-5 mx-3'>
      <div>
        KIDS WALL OF FAME
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {wof.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='space-y-5 flex flex-col items-center justify-center py-5'>
              <div><img className='w-32 rounded-full' src={profileImages[index]} alt={item.name} /></div>
              <div>{item.name}</div>
              <div className='text-justify'>{item.descriptions}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
