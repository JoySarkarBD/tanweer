import rectangle from "../../../assets/rectangle.png";

export default function AnnounceBar() {
  return (
    <>
      <section className='h-14 bg-[#FFE2B5] flex justify-center items-center '>
        <h1 className='text-[#A34411] text-center flex sm:flex justify-center items-center'>
          <span className='text-[18px] sm:text-[12px] xsm:text-[12px] font-normal '>
            Mleiha, Sharjah
          </span>
          <span>
            <img src={rectangle} alt='' className='mt-1 px-1' />
          </span>
          <span className='text-[18px] sm:text-[12px] xsm:text-[12px] font-normal '>
            November 24 - 26, 2023
          </span>
          <span className='hidden lg:visible lg:block md:block md:visible '>
            <img src={rectangle} alt='' className='mt-1 px-1' />
          </span>
          <span className='hidden lg:visible md:visible lg:block md:block text-[18px] font-normal'>
            Purchase tickets now!
          </span>
        </h1>
      </section>
    </>
  );
}
