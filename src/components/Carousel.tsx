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

function Carousel({ children }: CarouselProps) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      loop={false}
      centeredSlides={false}
      pagination={true}
      breakpoints={{
        390: { slidesPerView: 1.0, spaceBetween: 8 },
        768: { slidesPerView: 2.0, spaceBetween: 8 },
        1024: { slidesPerView: 3.0, spaceBetween: 16 },
        1280: { slidesPerView: 4.0, spaceBetween: 16 },
      }}
      className="mySwiper mb-2 xl:mb-4 w-11/12 pb-18"
    >
      {children}
    </Swiper>
  );
}

export default Carousel;