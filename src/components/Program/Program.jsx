import Program1 from "./Program1";
import Program2 from "./Program2";
import Program3 from "./Program3";

export default function Program() {
  return (
    <div className='bg-[#C06F39] py-24'>
      <div className='container'>
        <div className='text-center'>
          <h3 className='text-[#FFE88C] md:text-[60px] leading-normal'>
            Program
          </h3>
          <span className='md:text[30px] text-[#FFF7E0]'>
            Mleiha, Sharjah –––– November 24 - 26, 2023
          </span>
        </div>

        {/* program 1 */}
        <Program1 />

        {/* program 2 */}
        <Program2 />

        {/* program 3 */}
        <Program3 />

        <button className='max-w-[159px] mx-auto text-[14px] font-normal cursor-pointer w-full h-[43px] bg-[#F99D73] text-white rounded-[30px] md:max-w-[250px] md:text-[22px] md:h-[78px] md:rounded-[50px] flex justify-center items-center mt-32'>
          Get Passes
        </button>
      </div>
    </div>
  );
}
