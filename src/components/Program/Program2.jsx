import { useState } from "react";
import apeChimba from "../../assets/ape_chimba.png";
import modalArrow from "../../assets/modal_arrow.png";
import "./program.css";

export default function Program2() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    setIsHovering2(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setIsHovering2(false);
  };

  return (
    <>
      <div className='mt-32'>
        <h3 className='text-[#FFE88C] md:text-[40px] text-[18px] text-center font-aktive'>
          NOV 25
        </h3>

        <div className='text-white md:text-[30px] text-[22px] text-center flex justify-center flex-wrap gap-6 max-w-[740px] mx-auto mt-16 relative font-tan'>
          <h4>Kino MC Gregor</h4>
          <h4>&#x2022; Master Kann</h4>
          <h4>&#x2022; Niraj Naik</h4>
          <h4>Daneel</h4>
          <h4>&#x2022; Snatan Kaur (Kirtam) </h4>
          <h4>&#x2022; Farima Berenji</h4>
          <h4>&#x2022; Amaad & Akun Aborigines</h4>
          <h4>&#x2022; Local Musicians Concert</h4>
          <h4>&#x2022; Maria Coman</h4>
          <h4>&#x2022; Maria Coman</h4>
          <h4>&#x2022; Senny Camara</h4>
          <h4>&#x2022; Rodrigo Rodrigez</h4>
          <h4>&#x2022; Mei-Lan & Ali </h4>
          <h4
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className='relative'>
            &#x2022; Ape Chimba{" "}
          </h4>
          <h4>&#x2022; Sami Yusuf </h4>
          <h4>&#x2022; DJ Mose and Janax </h4>
          <h4>&#x2022; Pacha </h4>

          {/* ape chimba modal */}
          {isHovering && isHovering2 && (
            <>
              {/* Desktop Version */}
              <div className='absolute bottom-[-15%] hidden md:block'>
                <div className='relative'>
                  {/* image modal */}
                  <div className='2xl:w-[642px] xl:w-[542px] lg:w-[492px] md:w-[442px] 2xl:h-[619px] xl:h-[519px]  lg:h-[469px] md:h-[419px]  relative'>
                    <img src={apeChimba} alt='' className='w-full' />
                  </div>

                  {/* info modal */}
                  <div className='absolute  lg:bottom-[-1%] md:bottom-[-2%] 2xl:left-[-50%] xl:left-[-55%] lg:left-[-55%] md:left-[-42%] bg-[#ffe88c] 2xl:w-[500px] xl:w-[450px] lg:w-[420px] md:w-[320px] 2xl:h-[275px] xl:h-[225px] lg:h-[195px] md:h-[175px] pl-12 flex justify-between '>
                    <div>
                      <h4 className='text-[#C06F39] 2xl:text-[38px]  xl:text-[32px] lg:text-[28px] md:text-[24px] font-normal 2xl:pt-12 pt-10 md:pt-7  text-left'>
                        Ape Chimb
                      </h4>
                      <p className='text-[#C06F39] 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[18px] font-normal 2xl:pt-12 xl:pt-10 pt-10 md:pt-5  text-left'>
                        Multi-instrumental art and <br /> November 24 - 6PM{" "}
                      </p>
                    </div>

                    <div className='mt-4 me-3'>
                      <img src={modalArrow} alt='' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile version */}
              <div className='absolute block  md:hidden '>
                <div className='text-gray-600 body-font'>
                  <div className='container px-5 py-24 mx-auto'>
                    <div className='bg-[#FFE88C]   mx-auto '>
                      <div className=' '>
                        <img
                          className='xmd:w-[447px] sm:w-[367px] xsm:w-[337px] xmd:h-[400px]  sm:h-[354px] xsm:h-[300px]  mb-6'
                          src={apeChimba}
                          alt='content'
                        />
                        <div className='flex justify-between'>
                          <div className='pl-4'>
                            <h3 className='text-left xmd:text-[24px] sm:text-[22px] xsm:text-[20px] text-[#C06F39] font-normal leading-[55px] '>
                              Ape Chimba
                            </h3>
                            <p className='text-left text-[#C06F39] xmd:text-[16px] sm:text-[14px] xsm:text-[14px] font-normal leading-[25px] pb-8'>
                              Multi-instrumental artist and vocalist <br />{" "}
                              November 24 – 6PM
                            </p>
                          </div>

                          <div className='me-3'>
                            <img src={modalArrow} alt='' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
