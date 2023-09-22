import { useState } from "react";
import hamburgerIcon from "../../../assets/hamburgerMenu.png";
import imgLogo from "../../../assets/logo.png";
import megaImg5 from "../../../assets/mega-menu.png";
import megaImg1 from "../../../assets/mega-menu1.png";
import megaImg2 from "../../../assets/mega-menu2.png";
import megaImg3 from "../../../assets/mega-menu3.png";
import megaImg4 from "../../../assets/mega-menu4.png";
import sidbarVersion from "../../../assets/sidbar_version.png";
import upArrow from "../../../assets/up_arrow.png";
// import megaImg1 from "../../../assets/mega-menu1.png";
import AnnounceBar from "../AnnounceBar/AnnounceBar";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHamMenu = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const desktopNavClass = isHovered ? "desktopNav hovered" : "desktopNav";

  return (
    <>
      <nav className="relative">
        {/* Mobile version */}
        <div className="container h-[51px] bg-[#FFF7E0] block  md:hidden  ">
          <div className="flex py-3.5 ">
            <div>
              <button className="bg-[#A34411] rounded-[34px] text-[11px] text-[#FFF7E0] font-normal px-3 py-2 cursor-pointer flex justify-center  ">
                Get Passes
                <span>
                  <img src={upArrow} alt="" className="pl-1" />
                </span>
              </button>
            </div>
            <div className="grow">
              <img
                src={imgLogo}
                alt="logo"
                className="w-[138px] h-[32px] mx-auto "
              />
            </div>
            <button className="w-[22px] h-[21px]  mt-1" onClick={handleHamMenu}>
              <img src={hamburgerIcon} alt="" />
            </button>
          </div>
        </div>

        {/* desktop version */}
        <div
          className={`hidden md:block  ${desktopNavClass}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
        >
          <div className=" flex flex-row justify-center items-center ">
            <div className="basis-1/4"></div>

            <div className="basis-1/2 py-4">
              <ul className="flex justify-center items-center xl:space-x-4 lg:space-x-3 md:space-x-2">
                <li className="h-[70px] pt-4 hoverable px-1 ">
                  <a
                    href="#"
                    className="xl:text-[22px] lg:text-[18px] md:text-[16px] font-normal relative block "
                  >
                    Brief
                  </a>
                  {/* mega menu */}
                  <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl ">
                    <div className="container mx-auto  ">
                      <div className="grid grid-cols-5  gap-4 items-center">
                        <div className="col-span-1 "></div>

                        <div className="col-span-1">
                          <ul>
                            <li className="md:mb-3 lg:mb-0 ">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal  lg:leading-10 "
                              >
                                Founder’s Vision
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                Mission
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                Festival Totems
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10 "
                              >
                                Sustainability
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-span-1 ">
                          <img
                            src={megaImg1}
                            alt=""
                            className="text-center lg:w-[190px] lg:h-[190px] md:w-[140px] md:h-[140px] mx-auto"
                          />
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="h-[70px] pt-4 px-1 hoverable ">
                  <a
                    href="#"
                    className="xl:text-[22px] lg:text-[18px] md:text-[16px] font-normal relative block "
                  >
                    Program
                  </a>

                  {/* mega menu */}
                  <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl ">
                    <div className="container mx-auto  ">
                      <div className="grid grid-cols-5  gap-4 items-center">
                        <div className="col-span-1">
                          <img
                            src={megaImg2}
                            alt=""
                            className="text-center lg:w-[190px] lg:h-[190px] md:w-[140px] md:h-[140px] mx-auto"
                          />
                        </div>

                        <div className="col-span-2">
                          <ul>
                            <li className="md:mb-3 lg:mb-0 ">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal  lg:leading-10 "
                              >
                                Festival Program
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                All Artists
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                Concerts
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10 "
                              >
                                Wellbeing
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        {/* <div className='col-span-1'></div> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="h-[70px] pt-4 px-1  hoverable ">
                  <a
                    href="#"
                    className="xl:text-[22px] lg:text-[18px] md:text-[16px] font-normal relative block"
                  >
                    Explore
                  </a>

                  {/* mega menu */}
                  <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl ">
                    <div className="container mx-auto  ">
                      <div className="grid grid-cols-5  gap-4 items-center">
                        <div className="col-span-1"></div>
                        <div className="col-span-1 ">
                          <img
                            src={megaImg3}
                            alt=""
                            className="text-center lg:w-[190px] lg:h-[190px] md:w-[140px] md:h-[140px] mx-auto"
                          />
                        </div>

                        <div className="col-span-1">
                          <ul>
                            <li className="md:mb-3 lg:mb-0 ">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal  lg:leading-10 "
                              >
                                Concerts
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                Wellbeing
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                Marketplace
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-span-1">
                          <ul>
                            <li className="md:mb-3 lg:mb-0 ">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal  lg:leading-10 "
                              >
                                Nourish Stations
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                Art installations
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                Outdoor Activities
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-span-1"></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="lg:w-[290px] md:w-[200px]  lg:h-[67px] md:h-[47px]">
                  <img src={imgLogo} alt="logo" className="w-full" />
                </li>
                <li className="h-[70px] pt-4 px-1  hoverable ">
                  <a
                    href="#"
                    className="xl:text-[22px] lg:text-[18px] md:text-[16px] font-normal relative block"
                  >
                    Attend
                  </a>

                  {/* mega menu */}
                  <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl ">
                    <div className="container mx-auto  ">
                      <div className="grid grid-cols-5  gap-4 items-center">
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1 ">
                          <img
                            src={megaImg4}
                            alt=""
                            className="text-center lg:w-[190px] lg:h-[190px] md:w-[140px] md:h-[140px] mx-auto"
                          />
                        </div>

                        <div className="col-span-1">
                          <ul>
                            <li className="md:mb-3 lg:mb-0 ">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal  lg:leading-10 "
                              >
                                Transport
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                Camping
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                Festival Map
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-span-1">
                          <ul>
                            <li className="md:mb-3 lg:mb-0 ">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal  lg:leading-10 "
                              >
                                Packing List
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                Get Passes
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-3 invisible">
                              Outdoor Activities
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="h-[70px] pt-4 px-1  hoverable ">
                  <a
                    href="#"
                    className="xl:text-[22px] lg:text-[18px] md:text-[16px] font-normal relative block"
                  >
                    Support
                  </a>

                  {/* mega menu */}
                  <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl ">
                    <div className="container mx-auto  ">
                      <div className="grid grid-cols-5  gap-4 items-center">
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1 ">
                          <img
                            src={megaImg5}
                            alt=""
                            className="text-center lg:w-[190px] lg:h-[190px] md:w-[140px] md:h-[140px] mx-auto"
                          />
                        </div>

                        <div className="col-span-1">
                          <ul>
                            <li className="md:mb-3 lg:mb-0 ">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal  lg:leading-10 "
                              >
                                FAQ
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-0">
                              <a
                                href="#"
                                className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-normal lg:leading-10  "
                              >
                                Contact Us
                              </a>
                            </li>
                            <li className="md:mb-3 lg:mb-3 invisible">
                              Outdoor Activities
                            </li>
                            <li className="md:mb-3 lg:mb-3 invisible">
                              Outdoor Activities
                            </li>
                            <li className="md:mb-3 lg:mb-3 invisible">
                              Outdoor Activities
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="basis-1/4  flex justify-center items-center mb-2">
              <button className="bg-[#A34411] rounded-[34px] text-[#FFF7E0] font-normal xl:text-[20px] lg:text-[18px] md:text-[14px] xl:w-[185px] lg:w-[140px] md:w-[110px] lg:h-[47px] md:h-[37px] flex justify-center items-center ">
                {" "}
                Get Passes{" "}
                <sup className=" w-[24px] pl-3">
                  <img src={upArrow} alt="" />
                </sup>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <AnnounceBar />

      {/* Sidebar */}
      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div className=" overflow-y-scroll">
          <div className="pt-[50px] pb-[60px]  flex align-middle">
            <img
              src={sidbarVersion}
              alt=""
              className="w-[270px] h-[64px] mx-auto "
            />
            <span onClick={handleHamMenu} className="pe-4 cursor-pointer inline-block">
              <svg
                fill="#A34410"
                height="30px"
                width="30px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 490 490"
                xmlSpace="preserve"
                stroke="#A34410"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 " />{" "}
                </g>
              </svg>
            </span>
          </div>

          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[26px] font-normal ">
              Belief
            </div>
            <ul className="collapse-content text-[22px] font-light ">
              <li className="leading-10">
                <a href="#">Founder’s Vision</a>
              </li>
              <li className="leading-10">
                <a href="#">Mission</a>
              </li>
              <li className="leading-10">
                <a href="#">Festival Totems</a>
              </li>
              <li className="leading-10">
                <a href="#">Sustainability</a>
              </li>
            </ul>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[26px] font-normal">
              Program
            </div>
            <ul className="collapse-content text-[22px] font-light ">
              <li className="leading-10">
                <a href="#">Festival Program</a>
              </li>
              <li className="leading-10">
                <a href="#">All Artists</a>
              </li>
              <li className="leading-10">
                <a href="#">Concerts</a>
              </li>
              <li className="leading-10">
                <a href="#">Wellbeing</a>
              </li>
            </ul>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[26px] font-normal">
              Explore
            </div>
            <ul className="collapse-content text-[22px] font-light ">
              <li className="leading-10">
                <a href="#">Concerts</a>
              </li>
              <li className="leading-10">
                <a href="#">Wellbeing</a>
              </li>
              <li className="leading-10">
                <a href="#">Marketplace</a>
              </li>
              <li className="leading-10">
                <a href="#">Nourish Stations</a>
              </li>
              <li className="leading-10">
                <a href="#">Art installations</a>
              </li>
              <li className="leading-10">
                <a href="#">Outdoor Activities</a>
              </li>
            </ul>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[26px] font-normal">Attend</div>
            <ul className="collapse-content text-[22px] font-light ">
              <li className="leading-10">
                <a href="#">Transport</a>
              </li>
              <li className="leading-10">
                <a href="#">Camping</a>
              </li>
              <li className="leading-10">
                <a href="#">Festival Map</a>
              </li>
              <li className="leading-10">
                <a href="#">Packing List</a>
              </li>
              <li className="leading-10">
                <a href="#">Get Passes</a>
              </li>
            </ul>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[26px] font-normal">
              Support
            </div>
            <ul className="collapse-content text-[22px] font-light ">
              <li className="leading-10">
                <a href="#">FAQ</a>
              </li>
              <li className="leading-10">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* get pass button */}
        <div className="mt-5 mb-14  ">
          <button className="bg-[#A34411] rounded-[34px] text-[20px] font-normal text-[#FFF7E0] w-[315px] h-[68px] flex justify-center items-center mx-auto">
            {" "}
            Get Passes{" "}
            <sup className=" w-[24px] pl-3">
              <img src={upArrow} alt="" />
            </sup>
          </button>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={handleHamMenu}
      ></div>
    </>
  );
}
