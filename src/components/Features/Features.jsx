import featuresImg from "./../../assets/featuresImg.png";
export default function Features() {
  return (
    <div className="bg-[#BC672D] md:py-24 md:min-h-[700px] md:flex md:items-center md:justify-center flex-col">
      <div className="flex gap-y-8 md:gap-x-8 items-center justify-center container flex-col-reverse md:flex-row">
        <div className="w-[324px] pb-10 md:pb-0 text-white md:w-1/2">
          <h2 className="text-[40px] leading-[50px] mb-4 md:text-[60px] md:leading-[60px]">
            Mleiha, <br /> Sharjah
          </h2>
          <span className="text-[18px] leading-[16px] font-normal md:text-[24px] md:leading-[32px] text-[#FFF7E0]">
            Set against the breathtaking backdrop of the Mleiha Archaeological
            Site, the Tanweer Sacred Music Festival invites like-minded
            individuals to embark on an inner journey of self-discovery and
            connect with others through the transcendent power of sacred music.
          </span>
        </div>
        <div className="md:w-[400px] md:h-[400px] mx-auto pt-3 w-[268px] h-[268px] xsm:ml-20 sm:ml-40 md:relative">
          <img
            src={featuresImg}
            className="w-full h-full object-contain md:absolute md:top-[138px]"
            alt="featuresImg"
          />
        </div>
      </div>

      <div className="text-center md:mt-[250px] text-white py-5 space-y-16">
        <h2 className="text-[30px] leading-normal font-normal md:text-[55px]">We have been waiting for you</h2>
        <button className="max-w-[159px] text-[14px] font-normal cursor-pointer w-full h-[43px] bg-[#F99D73] rounded-[30px] md:max-w-[250px] md:text-[22px] md:h-[78px] md:rounded-[50px]">Get Passes</button>
      </div>
    </div>
  );
}
