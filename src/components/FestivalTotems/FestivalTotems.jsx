import NourishingIcon from "./../../assets/Nourishing-Icon.png";
import ReverentIcon from "./../../assets/Reverent-Icon.png";
import TransformativeIcon from "./../../assets/Transformative-Icon.png";
export default function FestivalTotems() {
  return (
    <div className='md:min-h-[1700px] py-24 bg-[#FFE2B5] '>
      <div className='container '>
        <h2 className='w-[250px] md:w-full mx-auto text-center flex flex-col md:flex-row text-[40px] leading-normal md:text-[60px] md:leading-normal text-[#E0AA51] md:mb-20 md:justify-center font-aktive'>
          Festival <span className='text-end'>Totems</span>
        </h2>

        <div className='grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-3 py-5 justify-center'>
          <div className='md:max-w-[332px] w-[207px] mx-auto text-start'>
            <img
              src={ReverentIcon}
              className='md:w-[249.117px] md:h-[249.117px] w-[87.59px] h-[87.59px] md:mx-auto object-contain'
              alt='ReverentIcon'
            />
            <div className='mt-6 text-[#E0AA51]'>
              <h2 className='md:text-[45px] xmd:text-[35px] xsm:text-[22px] md:leading-[65px] font-aktive'>
                Reverent
              </h2>
              <span className='md:text-[24px] md:leading-[32px] '>
                Through sacred sounds, we aim to create a sense of reverence and
                remembrance for the old ways while also fostering unity and
                connection among all beings.
              </span>
            </div>
          </div>
          <div className='md:max-w-[332px] w-[207px] mx-auto text-start md:relative md:top-[300px]'>
            <img
              src={NourishingIcon}
              className='md:w-[249.117px] md:h-[249.117px] w-[87.59px] h-[87.59px] md:mx-auto object-contain'
              alt='NourishingIcon'
            />
            <div className='text-[#E0AA51] mt-6'>
              <h2 className='md:text-[45px] xmd:text-[35px] xsm:text-[22px] md:leading-[65px] font-aktive'>
                Nourishing
              </h2>
              <span className='md:text-[24px] md:leading-[32px] '>
                The festival emphasizes the importance of nourishing the body,
                mind, and spirit, with a focus on healthy food, self-care, and
                mindfulness practices.
              </span>
            </div>
          </div>
          <div className='md:max-w-[332px] w-[207px] mx-auto text-start md:relative md:top-[600px]'>
            <img
              src={TransformativeIcon}
              className='md:w-[249.117px] md:h-[249.117px] w-[87.59px] h-[87.59px] md:mx-auto object-contain'
              alt='TransformativeIcon'
            />
            <div className='mt-6 text-[#E0AA51]'>
              <h2 className='md:text-[45px] xmd:text-[35px] xsm:text-[22px]  md:leading-[65px] font-aktive'>
                Transformative
              </h2>
              <span className='md:text-[24px] md:leading-[32px] '>
                The festival has the potential to be a transformative experience
                for attendees, allowing them to deepen their connection to their
                cultural roots and explore new ways of being.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
