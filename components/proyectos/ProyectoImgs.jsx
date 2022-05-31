import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

function ProyectoImgs({ image, title }) {
  const { primeraImg, segundaImg, terceraImg, cuartaImg, quintaImg, sextaImg } =
    image;
  return (
    <Swiper pagination={true} modules={[Pagination]} className="card_slider">
      <SwiperSlide>
        <Image
          src={primeraImg}
          alt={title}
          width={300}
          height={250}
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={segundaImg}
          alt={title}
          width={300}
          height={250}
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={terceraImg}
          alt={title}
          width={300}
          height={250}
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={cuartaImg}
          alt={title}
          width={300}
          height={250}
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={quintaImg}
          alt={title}
          width={300}
          height={250}
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={sextaImg}
          alt={title}
          width={300}
          height={250}
          layout="responsive"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default ProyectoImgs;
