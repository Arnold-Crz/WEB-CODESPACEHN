import styled from 'styled-components';
import Image from 'next/image';
import * as C from '../../styles/variables';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

function ProyectoImgs({ img }) {
  const {
    primeraImg,
    segundaImg,
    terceraImg,
    cuartaImg,
    quintaImg,
    sextaImg = '',
  } = img;

  return (
    <Swiper pagination={true} modules={[Pagination]} className="card_slider">
      <SwiperSlide>
        <Image
          src={primeraImg}
          width={'1000px'}
          height={'800px'}
          layout="responsive"
          alt="imagen-clinica"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={segundaImg}
          width={'1000px'}
          height={'800px'}
          layout="responsive"
          alt="imagen-clinica"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={terceraImg}
          width={'1000px'}
          height={'800px'}
          layout="responsive"
          alt="imagen-clinica"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={cuartaImg}
          width={'1000px'}
          height={'800px'}
          layout="responsive"
          alt="imagen-clinica"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={quintaImg}
          width={'1000px'}
          height={'800px'}
          layout="responsive"
          alt="imagen-clinica"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={sextaImg}
          width={'1000px'}
          height={'800px'}
          layout="responsive"
          alt="imagen-clinica"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default ProyectoImgs;
