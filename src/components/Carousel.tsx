// Import Swiper React components
import { Swiper } from 'swiper/react';
// import Swiper from 'swiper/bundle';
import SwiperCore, { Pagination } from 'swiper';

// Initialize the Pagination component
SwiperCore.use([Pagination]);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; // Add this line to import pagination styles

interface CarouselProps {
  children: React.ReactNode;
}

interface CustomSwiperStyles {
  [key: string]: string; 
}

function Carousel({ children }: CarouselProps) {
  const swiperStyles: CustomSwiperStyles = {
      "--swiper-pagination-bullet-width": "12px",
      "--swiper-pagination-bullet-height": "12px",
      "--swiper-pagination-bullet-border-radius": "50%",
      "--swiper-pagination-color": "#22d3ee",
      "--swiper-pagination-bullet-size": "8px",
      "--swiper-pagination-bullet-horizontal-gap": "6px"
  };

  return (
    <Swiper 
      style={swiperStyles}
      slidesPerView={1}
      spaceBetween={16}
      loop={false}
      centeredSlides={false}
      pagination={{ clickable: true }}
      breakpoints={{
        390: { slidesPerView: 1.0, spaceBetween: 8 },
        768: { slidesPerView: 2.0, spaceBetween: 8 },
        1024: { slidesPerView: 2.0, spaceBetween: 16 },
        1280: { slidesPerView: 3.0, spaceBetween: 32 },
      }}
      className="mySwiper mb-2 xl:mb-4 w-11/12 pb-18"
    >
      {children}
    </Swiper>
  );
}

export default Carousel;