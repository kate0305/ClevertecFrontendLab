/* eslint-disable simple-import-sort/imports */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import { booksFoto } from '../../data/books-photos';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import './swiper.css';

export const Slider = () => {
  const { bookID } = useParams();
  const foto = booksFoto.find((i) => i.id === bookID);
  const fotos = foto?.images as string[];

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
        {fotos.map((item) => (
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
        {fotos.map((item) => (
          <SwiperSlide key={Math.random()} data-test-id='slide-mini'>
            <img src={item} alt='book' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
