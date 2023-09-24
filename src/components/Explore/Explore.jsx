import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import extraImg from "../../assets/sliderImg.png";
import "./Explore.css";

const slidersData = [
  {
    id: 1,
    img: extraImg,
    caption:
      "Tanweer Sacred Music Festival will feature workshops and sessions on music, vibration, and singing led by experienced medicine musicians, teachers, and facilitators.",
  },
  {
    id: 2,
    img: extraImg,
    caption:
      "Tanweer Sacred Music Festival will feature workshops and sessions on music, vibration, and singing led by experienced medicine musicians, teachers, and facilitators.",
  },
  {
    id: 3,
    img: extraImg,
    caption:
      "Tanweer Sacred Music Festival will feature workshops and sessions on music, vibration, and singing led by experienced medicine musicians, teachers, and facilitators.",
  },
  {
    id: 4,
    img: extraImg,
    caption:
      "Tanweer Sacred Music Festival will feature workshops and sessions on music, vibration, and singing led by experienced medicine musicians, teachers, and facilitators.",
  },
  {
    id: 5,
    img: extraImg,
    caption:
      "Tanweer Sacred Music Festival will feature workshops and sessions on music, vibration, and singing led by experienced medicine musicians, teachers, and facilitators.",
  },
  {
    id: 6,
    img: extraImg,
    caption:
      "Tanweer Sacred Music Festival will feature workshops and sessions on music, vibration, and singing led by experienced medicine musicians, teachers, and facilitators.",
  },
];

export default function Explore() {
  return (
    <>
      <div className='bg-exploreBg bg-no-repeat bg-cover bg-center py-20'>
        <div>
          <h1 className='text-[#FFF7E0] text-center  lg:text-[80px]  md:text-[60px] sm:text-[50px]  font-normal font-aktive '>
            Explore Tanweer
          </h1>
        </div>

        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          modules={[Navigation]}
          loop={true}
          navigation>
          {slidersData.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <div key={data.id} data={data} className='flex flex-wrap'>
                  <img src={data.img} alt='' />
                  <p className='caption lg:pt-[50px] md:pt-[35px] xmd:pt-[25px] sm:pt-[20px] xsm:pt-[15px] text-[#FFF7E0] text-[12px] leading-4 sm:text-[16px] sm:leading-5 md:text-[20px] md:leading-6 lg:text-[24px] lg:leading-8  '>
                    {data.caption}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className='text-center pt-[81px] pb-[13px]  '>
          <button className='text-[#FFF7E0] lg:text-[22px] md:text-[20px] sm:text-[16px] font-normal bg-[#A34411] rounded-[35px] px-8 py-4'>
            Explore Wellbeing at Tanweer
          </button>
        </div>
      </div>
    </>
  );
}
