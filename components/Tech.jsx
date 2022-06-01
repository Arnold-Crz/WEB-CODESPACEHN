import styled from 'styled-components';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

//Paleta de colores
import * as C from '../styles/variables';

function Tech() {
  return (
    <Wrapper>
      <h2>
        Tecnologías con las que <span>trabajamos</span>
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        className="wrapper_imgs"
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/img/carroselhtml.svg"
            alt="HTML5"
            width={95}
            height={95}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/carroselcss.svg"
            alt="csscarrosel"
            width={95}
            height={95}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/carroseljs.svg"
            alt="carroseljs"
            width={95}
            height={95}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/carroselreact.svg"
            alt="carroselreact"
            width={95}
            height={95}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/carroselnode.svg"
            alt="carroselnode"
            width={95}
            height={95}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/carroselnext.svg"
            alt="carroselnext"
            width={95}
            height={95}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/carroselfigma.svg"
            alt="carroselfigma"
            width={95}
            height={95}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/carroselvite.svg"
            alt="carroselfigma"
            width={95}
            height={95}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/carroselrouter.svg"
            alt="carroselfigma"
            width={95}
            height={95}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/carroselsass.svg"
            alt="carroselfigma"
            width={95}
            height={95}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/carroselstyled.svg"
            alt="carroselfigma"
            width={95}
            height={95}
          />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    padding: 20px;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    color: ${C.COLOR_NEGRO};
    span {
      color: ${C.COLOR_NARANJA};
    }
    @media screen, (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
  .wrapper_imgs {
    background-color: ${C.COLOR_BG_CARROSEL};
    border-radius: 35px;
    padding: 20px 10px;
    cursor: pointer;
  }
`;

export default Tech;
