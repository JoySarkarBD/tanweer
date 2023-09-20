import logoImg from "../../../assets/logo.png";
import megaMenu2 from "../../../assets/mega-menu2.png";
import AnnounceBar from "../AnnounceBar/AnnounceBar";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className='navbar bg-[#FFF7E0] h-[153px]  '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='navbar-center hidden lg:flex '>
          <ul className='menu menu-horizontal lg:items-center px-1'>
            <li className='hoverable '>
              <a className='text-[#a34411] text-[22px] font-normal relative '>
                Belief
              </a>

              <div className='p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-red'>
                <div className='container mx-auto w-full  '>
                  <div className='w-full text-black mb-8 text-center'>
                    <h2 className='font-bold text-2xl'>
                      Listen, why don’t you wait out by the speeder.
                    </h2>
                    <p>
                      our droids. They’ll have to wait outside. We don’t want
                      them here.
                    </p>
                  </div>
                  <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3'>
                    <div className='flex items-center'>
                      <svg
                        className='h-8 mb-3 mr-3 fill-current text-black'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'>
                        <path d='M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z' />
                      </svg>
                      <h3 className='font-bold text-xl text-black text-bold mb-2'>
                        Tatooine
                      </h3>
                    </div>
                    <p className='text-black-100 text-sm'>
                      Thul klivian doldur thisspiasian calrissian. Garindan d8
                      aurra twi&rsquo;lek tund polis gen&rsquo;dai sola tarpals.
                    </p>
                    <div className='flex items-center py-3'>
                      <svg
                        className='h-6 pr-3 fill-current text-black'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'>
                        <path d='M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z' />
                      </svg>
                      <a
                        href='#'
                        className='text-black bold border-b-2 border-teal-300 hover:text-teal-900'>
                        Find out more...
                      </a>
                    </div>
                  </ul>
                  <ul className='px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3'>
                    <div className='flex items-center'>
                      <svg
                        className='h-8 mb-3 mr-3 fill-current text-black'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'>
                        <path d='M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z' />
                      </svg>
                      <h3 className='font-bold text-xl text-black text-bold mb-2'>
                        Cantonica
                      </h3>
                    </div>
                    <p className='text-black text-sm'>
                      Thul klivian doldur thisspiasian calrissian. Garindan d8
                      aurra twi&rsquo;lek tund polis gen&rsquo;dai sola tarpals.
                    </p>
                    <div className='flex items-center py-3'>
                      <svg
                        className='h-6 pr-3 fill-current text-black'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'>
                        <path d='M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z' />
                      </svg>
                      <a
                        href='#'
                        className='text-black bold border-b-2 border-teal-300 hover:text-teal-900'>
                        Find out more...
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </li>
            <li className='hoverable '>
              <a className='text-[#a34411] text-[22px] font-normal relative'>
                Program
              </a>

              <div className='p-6 mega-menu mb-16 sm:mb-0 shadow-xl '>
                <div className='container mx-auto w-full  '>
                  <ul className='px-4 w-full sm:w-1/2 lg:w-1/4   pb-6 pt-6 lg:pt-6'>
                    <div className='flex items-center'>
                      <img src={megaMenu2} alt='' />
                    </div>
                  </ul>
                  <ul className='px-4 w-full sm:w-1/2 lg:w-1/4  pb-6 pt-6 lg:pt-3'>
                    <div className='flex items-center'>
                      <svg
                        className='h-8 mb-3 mr-3 fill-current text-black'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'>
                        <path d='M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z' />
                      </svg>
                      <h3 className='font-bold text-xl text-black text-bold mb-2'>
                        Cantonica
                      </h3>
                    </div>
                    <p className='text-black text-sm'>
                      Thul klivian doldur thisspiasian calrissian. Garindan d8
                      aurra twi&rsquo;lek tund polis gen&rsquo;dai sola tarpals.
                    </p>
                    <div className='flex items-center py-3'>
                      <svg
                        className='h-6 pr-3 fill-current text-black'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'>
                        <path d='M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z' />
                      </svg>
                      <a
                        href='#'
                        className='text-black bold border-b-2 border-teal-300 hover:text-teal-900'>
                        Find out more...
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a className='text-[#a34411] text-[22px] font-normal '>Explore</a>
            </li>
            <li>
              <img src={logoImg} alt='logo' />
            </li>
            <li>
              <a className='text-[#a34411] text-[22px] font-normal '>Attend</a>
            </li>
            <li>
              <a className='text-[#a34411] text-[22px] font-normal '>Support</a>
            </li>
          </ul>
        </div>

        <div className='lg:navbar-end md:navbar-end lg:me-2 md:me-2'>
          <input
            type='submit'
            value='Get Passes'
            className=' bg-[#A34411] rounded-[34px] text-[#FFF7E0] text-[20px] font-normal get_pass_btn text-center cursor-pointer'
          />
        </div>
      </div>
      <AnnounceBar />
    </>
  );
}

// import React, { useState } from "react";
// import "./Navbar.css";

// export default function Navbar() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleHover = () => {
//     setIsHovered(true);
//   };

//   const handleUnhover = () => {
//     setIsHovered(false);
//   };

//   const navbarClass = isHovered ? "navbar hovered" : "navbar";

//   return (
//     <nav
//       className={navbarClass}
//       onMouseEnter={handleHover}
//       onMouseLeave={handleUnhover}>
//       <ul className='menu'>
//         <li>
//           <a href='#'>Home</a>
//         </li>
//         <li>
//           <a href='#'>About</a>
//         </li>
//         <li>
//           <a href='#'>Services</a>
//         </li>
//         <li>
//           <a href='#'>Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }
