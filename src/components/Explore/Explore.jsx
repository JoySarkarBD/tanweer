import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Explore.css";

import {
  default as sliderImg1,
  default as sliderImg2,
  default as sliderImg3,
  default as sliderImg4,
  default as sliderImg5,
  default as sliderImg6,
} from "../../assets/sliderImg.png";

const exploresSlide = [
  {
    id: 1,
    img: sliderImg1,
  },
  {
    id: 2,
    img: sliderImg2,
  },
  {
    id: 3,
    img: sliderImg3,
  },
  {
    id: 4,
    img: sliderImg4,
  },
  {
    id: 5,
    img: sliderImg5,
  },
  {
    id: 6,
    img: sliderImg6,
  },
];

export default function Explore() {
  return (
    <>
      <div className='bg-exploreBg bg-no-repeat bg-cover bg-center py-20'>
        <div>
          <h1 className='text-[#FFF7E0] text-center  md:text-[60px] xsm:text-[40px] font-normal  '>
            Explore Tanweer
          </h1>
        </div>

        <div>
          <Swiper
            initialSlide={Math.floor(exploresSlide.length / 2)}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation]}
            breakpoints={{
              481: {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              641: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}>
            {exploresSlide.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <div key={data.id} data={data}>
                    <img src={data.img} alt='' />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className='lg:w-[600px] md:w-[500px] xmd:w-[450px]  mx-auto mt-[-40px]'>
          <p className='text-center text-[#FFF7E0] md:text-[18px] xmd:text-[16px] font-normal '>
            Tanweer Sacred Music Festival will feature workshops and <br />{" "}
            sessions on music, vibration, and singing led by experienced <br />{" "}
            medicine musicians, teachers, and facilitators.
          </p>
        </div>

        <div className='text-center pt-[81px] pb-[13px]  '>
          <button className='text-[#FFF7E0] text-[22px] font-normal bg-[#A34411] rounded-[35px] px-8 py-4'>
            Explore Wellbeing at Tanweer
          </button>
        </div>
      </div>
    </>
  );
}
