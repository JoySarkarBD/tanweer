import heroImg from "./../../assets/heroImg.png";

const Banner = () => {
  return (
    <>
      <div className="min-h-screen bg-[#C06F39;] flex items-center py-6 lg:py-6">
        <div className="flex items-center justify-between w-full container flex-col-reverse space-y-12 lg:space-y-0 lg:flex-row md:flex-col-reverse md:space-y-12">
          {/* Banner left Area */}
          <div className="text-center">
            <h1 className="text-[#FFE88C] font-normal flex items-center justify-center flex-col">
              <span className="text-[30px] leading-[100px] md:text-[65px] md:leading-[100px]">
                GET YOUR
              </span>
              <span className="text-[45px] leading-[55px] md:text-[75px] md:leading-[100px]">
                TICKETS NOW
              </span>
            </h1>
            <button className="mt-[43px] max-w-[159px] mx-auto h-[43px] w-full rounded-[39px] bg-[#A34411] text-white text-[14px] font-normal leading-[65px] text-center flex items-center justify-center md:text-[26px] md:max-w-[265px] md:h-[78px]">
              Get Passes
            </button>
          </div>
          {/* Banner right Area */}
          <div className="max-w-[742px]">
            <img src={heroImg} className="w-full h-full" alt="Hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
