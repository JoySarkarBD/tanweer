import heroImg from "./../../assets/heroImg.png";

const Banner = () => {
  return (
    <>
      <div className="min-h-screen bg-[#C06F39] py-6 lg:py-6 flex items-center justify-center">
        <div className=" flex items-center container">
          <div className="w-full px-[15px] grid lg:grid-cols-2  lg:items-center md:grid-cols-1">
            {/* Banner left Area */}
            <div className="xsm:w-full xsm:text-center  lg:order-2">
              <img
                src={heroImg}
                className="xsm:max-w-[317px] xsm:w-full xsm:inline-block xsm:py-[20px] xmd:max-w-[729px]"
                alt="Hero"
              />
            </div>
            <div className="text-center lg:order-1">
              <h1 className="text-[#FFE88C] font-normal flex items-center justify-center flex-col">
                <span className="text-[30px] leading-[100px] md:text-[65px] md:leading-[100px]">
                  GET YOUR
                </span>
                <span className="font-aktive text-[45px] leading-[55px] md:text-[75px]  md:leading-[100px]">
                  TICKETS NOW
                </span>
              </h1>
              <button className="mt-[43px] max-w-[159px] mx-auto h-[43px] w-full rounded-[39px] bg-[#A34411] text-white text-[14px] font-normal leading-[65px] text-center flex items-center justify-center md:text-[26px] md:max-w-[265px] md:h-[78px]">
                Get Passes
              </button>
            </div>
            {/* Banner right Area */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
