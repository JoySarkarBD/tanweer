import { useState } from "react";
import hamburgerIcon from "../../../assets/hamburgerMenu.png";
import imgLogo from "../../../assets/logo.png";
import AnnounceBar from "../AnnounceBar/AnnounceBar";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const sidebarRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       isOpen &&
  //       sidebarRef.current &&
  //       !sidebarRef.current.contains(event.target)
  //     ) {
  //       setIsOpen(false);
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isOpen]);

  const handleHamMenu = () => {
    // setIsOpen(!isOpen);
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <nav>
        {/* desktop version */}
        <div className='flex flex-row justify-center items-center  xmd:hidden sm:hidden xsm:hidden desktop_nav'>
          <div className='basis-1/4'></div>

          <div className='basis-1/2'>
            <ul className='flex justify-center items-center space-x-4 '>
              <li>
                <a href='#'>Brief</a>
              </li>
              <li>
                <a href='#'>Program</a>
              </li>
              <li>
                <a href='#'>Explore</a>
              </li>
              <li className='w-[290px]  h-[67px]'>
                <img src={imgLogo} alt='logo' className='w-full' />
              </li>
              <li>
                <a href='#'>Attend</a>
              </li>
              <li>
                <a href='#'>Support</a>
              </li>
            </ul>
          </div>

          <div className='basis-1/4 '>
            <button className='bg-[#A34411] rounded-[34px] text-[#FFF7E0] font-normal text-[20px] w-[185px] h-[47px] mx-auto '>
              {" "}
              Get Passes{" "}
            </button>
          </div>
        </div>

        {/* Mobile version */}
        <div className='container h-[51px] bg-[#FFF7E0] lg:hidden md:hidden xl:hidden 2xl:hidden '>
          <div className='flex  py-3.5 '>
            <div>
              <input
                type='submit'
                value='Get Passes'
                className='bg-[#A34411] rounded-[34px] text-[11px] text-[#FFF7E0] font-normal px-3 py-2 cursor-pointer'
              />
            </div>
            <div className='grow'>
              <img
                src={imgLogo}
                alt='logo'
                className='w-[138px] h-[32px] mx-auto '
              />
            </div>
            <button className='w-[22px] h-[21px]  mt-1' onClick={handleHamMenu}>
              <img src={hamburgerIcon} alt='' />
            </button>
          </div>
        </div>
      </nav>
      <AnnounceBar />

      {/* Sidebar */}
      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div className='pt-28 pl-10 overflow-y-scroll'>
          <div className='collapse collapse-plus '>
            <input type='radio' name='my-accordion-3' />
            <div className='collapse-title text-[26px] font-normal '>
              Belief
            </div>
            <ul className='collapse-content text-[22px] font-light '>
              <li className='leading-10'>
                <a href='#'>Founder’s Vision</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Mission</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Festival Totems</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Sustainability</a>
              </li>
            </ul>
          </div>
          <div className='collapse collapse-plus '>
            <input type='radio' name='my-accordion-3' />
            <div className='collapse-title text-[26px] font-normal'>
              Program
            </div>
            <ul className='collapse-content text-[22px] font-light '>
              <li className='leading-10'>
                <a href='#'>Festival Program</a>
              </li>
              <li className='leading-10'>
                <a href='#'>All Artists</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Concerts</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Wellbeing</a>
              </li>
            </ul>
          </div>
          <div className='collapse collapse-plus '>
            <input type='radio' name='my-accordion-3' />
            <div className='collapse-title text-[26px] font-normal'>
              Explore
            </div>
            <ul className='collapse-content text-[22px] font-light '>
              <li className='leading-10'>
                <a href='#'>Concerts</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Wellbeing</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Marketplace</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Nourish Stations</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Art installations</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Outdoor Activities</a>
              </li>
            </ul>
          </div>
          <div className='collapse collapse-plus '>
            <input type='radio' name='my-accordion-3' />
            <div className='collapse-title text-[26px] font-normal'>Attend</div>
            <ul className='collapse-content text-[22px] font-light '>
              <li className='leading-10'>
                <a href='#'>Transport</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Camping</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Festival Map</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Packing List</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Get Passes</a>
              </li>
            </ul>
          </div>
          <div className='collapse collapse-plus '>
            <input type='radio' name='my-accordion-3' />
            <div className='collapse-title text-[26px] font-normal'>
              Support
            </div>
            <ul className='collapse-content text-[22px] font-light '>
              <li className='leading-10'>
                <a href='#'>FAQ</a>
              </li>
              <li className='leading-10'>
                <a href='#'>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* get pass button */}
        <div className='mt-5 mb-14 text-center '>
          <input
            type='submit'
            value='Get Passes'
            className='bg-[#A34411] rounded-[34px] text-[20px] font-normal text-[#FFF7E0] w-[315px] h-[68px] '
          />
        </div>
      </div>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={handleHamMenu}></div>
    </>
  );
}

{
  /* import React, { useState } from "react";
 import "./Navbar.css";

 export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const navbarClass = isHovered ? "navbar hovered" : "navbar";

  return (
    <nav
      className={navbarClass}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}>
      <ul className='menu'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
} */
}
