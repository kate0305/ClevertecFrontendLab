/* eslint-disable simple-import-sort/imports */
import { useState } from 'react';
import { FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import './swiper.css';

type SliderProps = {
  photos: string[];
};

export const Slider = ({ photos }: SliderProps) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <div className='wrapper'>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        grabCursor={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        className='mainSwiper'
        data-test-id='slide-big'
      >
        {photos.map((item) => (
          <SwiperSlide key={Math.random()}>
            <img src={item} alt='book' />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Scrollbar, Thumbs]}
        scrollbar={true}
        className='swiperThumbs'
      >
        {photos.map((item) => (
          <SwiperSlide key={Math.random()} data-test-id='slide-mini'>
            <img src={item} alt='book' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
