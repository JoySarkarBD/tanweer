import { useState } from "react";
import apeChimba from "../../assets/ape_chimba.png";
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
        <h3 className='text-[#FFE88C] md:text-[40px] text-[18px] text-center'>
          NOV 25
        </h3>

        <div className='text-white md:text-[30px] text-[22px] text-center flex justify-center flex-wrap gap-6 max-w-[740px] mx-auto mt-16 relative'>
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
              <div className='absolute modal_section bottom-[-15%] '>
                <div className='relative'>
                  {/* image modal */}
                  <div className='2xl:w-[642px] xl:w-[542px] lg:w-[492px] md:w-[442px] 2xl:h-[619px] xl:h-[519px]  lg:h-[469px] md:h-[419px] img_modal relative'>
                    <img src={apeChimba} alt='' className='w-full' />
                  </div>

                  {/* info modal */}
                  <div className='absolute  lg:bottom-[-1%] md:bottom-[-2%] xl:left-[-55%] lg:left-[-55%] md:left-[-42%] bg-[#ffe88c] xl:w-[450px] lg:w-[420px] md:w-[320px]  xl:h-[225px] lg:h-[195px] md:h-[175px] pl-12 '>
                    <h4 className='text-[#C06F39]  xl:text-[32px] lg:text-[28px] md:text-[24px] font-normal pt-10 md:pt-7  text-left'>
                      Ape Chimb
                    </h4>
                    <p className='text-[#C06F39] xl:text-[24px] lg:text-[20px] md:text-[18px] font-normal pt-8 md:pt-5  text-left'>
                      Multi-instrumental art and <br /> November 24 - 6PM{" "}
                    </p>
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
