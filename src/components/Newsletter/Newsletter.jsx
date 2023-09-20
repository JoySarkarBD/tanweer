export default function Newsletter() {
  return (
    <div className="bg-[#FFE2B5]">
      <div className="max-w-[1295px] w-full mx-auto min-h-[245.67px] md:h-[552.71px] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:md:grid-cols-2 text-center gap-x-[74px] md:gap-x-[0px] md:place-items-center md:mx-12">
          <h2 className="text-[22px] leading-[22px] text-[#C06F39] font-normal md:text-[65px] md:leading-[65px] mb-4 md:text-center lg:text-left">
            Get festival news and updates
          </h2>
          <div className="px-4 w-full">
            <form className="w-full">
              <div className="relative rounded-full  w-full bg-[#FFD19A] h-[51.908px] flex items-center justify-between mb-[17px]">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="outline-none text-base text-[black] placeholder-[#C06F39] px-5 bg-transparent"
                />
                <button className="bg-[#A34411] text-base text-white rounded-full max-w-[208px] w-full h-full">
                  Submit
                </button>
              </div>
              <span className="text-[12px] font-normal text-[#C06F39] leading-[18px] md:leading-[15px] md:text-[18px] md:text-end">
                Keep updated on festival news, announcements, and exclusive
                ticket offers
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
