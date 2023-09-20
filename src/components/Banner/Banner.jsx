import heroImg from "./../../assets/heroImg.png";

const Banner = () => {
  return (
    <>
      <div className="min-h-screen bg-[#C06F39;] flex items-center py-6 lg:py-6">
        <div className="flex items-center justify-between w-full container flex-col space-y-12 lg:space-y-0 lg:flex-row md:flex-col md:space-y-12">
          {/* Banner left Area */}
          <div className="text-center">
            <h1 className="text-[#FFE88C] font-normal flex items-center justify-center flex-col">
              <span className="text-[56px] leading-[69px] lg:text-[65px] lg:leading-[100px] md:text-[65px] md:leading-[100px]">
                GET YOUR
              </span>
              <span className="text-[56px] leading-[69px] lg:text-[75px] lg:leading-[100px] md:text-[75px] md:leading-[100px]">
                TICKETS NOW
              </span>
            </h1>
            <button className="mt-[43px] w-[265px] h-[78px] rounded-[39px] bg-[#A34411] text-white text-[26px] font-normal leading-[65px] text-center">
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
