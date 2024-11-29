import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import ima_01 from '../../assets/Images/Ima1.jpeg';
import ima_02 from '../../assets/Images/Ima2.jpeg';
import ima_03 from '../../assets/Images/Ima3.jpeg';
import ima_04 from '../../assets/Images/Ima4.jpeg';
import ima_05 from '../../assets/Images/Ima5.jpeg';
import ima_06 from '../../assets/Images/Ima6.jpeg';
import ima_07 from '../../assets/Images/ima7.jpg';

export const Header = () => {
  const imageStyle = {
    width: '50%',
    height: '300px', // Ajusta la altura según tus necesidades
    objectFit: 'cover', // Esto asegura que la imagen se recorte para llenar el contenedor
  };

  return (
    <div className='container'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.5}
        spaceBetween={50}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={800}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >    
        <SwiperSlide>
          <img src={ima_01} alt="slide_image" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ima_02} alt="slide_image" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ima_03} alt="slide_image" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ima_04} alt="slide_image" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ima_05} alt="slide_image" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ima_06} alt="slide_image" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ima_07} alt="slide_image" style={imageStyle} />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="transition ease-in-out swiper-button-prev hover:text-white "></div>
          <div className="transition ease-in-out swiper-button-next hover:text-white"></div>
        </div>
      </Swiper>
    </div>   
  );
};

export default Header