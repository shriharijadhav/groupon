import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, Image } from '@chakra-ui/react';

export const Dummy = ({allSlides}) => {
  return (
    <>
      <Swiper  modules={[Autoplay, Pagination, Navigation]} className="mySwiper" 
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      >
      {
        allSlides.map((slide, index) =>(
            <SwiperSlide key={slide.id}>
            <Box bgImage={`url(${slide.imgUrl})`} w={'100%'} bgSize={'contain'} p={4} rounded="md" h={'300px'}>
          </Box> 

            </SwiperSlide>
        ))
      }
        
        
       
      </Swiper>
    </>
  );
}
