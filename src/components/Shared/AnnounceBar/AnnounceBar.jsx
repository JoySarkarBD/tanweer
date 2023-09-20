import rectangle from "../../../assets/rectangle.png";

export default function AnnounceBar() {
  return (
    <>
      <section className='h-14 bg-[#FFE2B5] lg:flex lg:justify-center lg:items-center '>
        <div className='text-[#A34411] text-[18px] font-normal lg:flex lg:justify-center lg:items-center'>
          <span>Mleiha, Sharjah</span>
          <span>
            <img src={rectangle} alt='' className='mt-1 px-1' />
          </span>
          <span>November 24 - 26, 2023</span>
          <span>
            <img src={rectangle} alt='' className='mt-1 px-1' />
          </span>
          <span>Purchase tickets now!</span>
        </div>
      </section>
    </>
  );
}
