import instagram from "./../../../assets/Instagram.png";
import logo from "./../../../assets/logo-white.png";
const Footer = () => {
  return (
    <>
      <footer className="text-white cursor-pointer body-font bg-[#BE7649]">
        <div className="md:footer_container  lg:px-24 py-24 mx-auto flex md:items-center lg:items-start md:flex-col md:flex-nowrap flex-wrap flex-col md:px-5 lg:flex-row">
          {/* First Column */}
          <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left lg:mt-6">
            <div className="max-w-[325.413px] min-h-[76.232px]">
              <img src={logo} className="w-full h-full" alt="logo" />
            </div>
            <div className="justify-center gap-x-10 text-white mt-[72px] hidden md:flex">
              <a href="#" className="w-[35px] h-[35px]">
                <img
                  src={instagram}
                  className="w-full h-full"
                  alt="instagram"
                />
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <path
                    d="M15.0194 18.4653L13.7838 16.6973L3.95267 2.63497H8.18523L16.1191 13.9838L17.3547 15.751L27.6677 30.5027H23.4352L15.0194 18.4653ZM27.6664 0.560547L17.5696 12.2971L9.50528 0.560547H0.204102L12.3989 18.3083L0.204102 32.4828H2.95978L13.6223 20.0886L22.1387 32.4828H31.4399L18.793 14.0774L30.4219 0.560547H27.6664Z"
                    fill="white"
                  />
                </svg>
              </a>
              <span>
                © 2023 Tanweer <br />
                Festival
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-between md:pl-0 -mb-10 md:mt-5 mt-10 md:text-left text-center md:grid-cols-2 lg:grid-cols-5 lg:mt-0 lg:max-w-5xl lg:mx-auto ">
            <div className="lg:w-[151px] md:w-1/2 w-full lg:ml-7">
              <nav className="list-none border-b-2 border-t-2 border-[#E0AA51] text-start md:border-0">
                <ul className="ml-[44px] my-4">
                  <li>
                    <a className="text-[14px] md:text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                      Belief
                    </a>
                  </li>
                  <li>
                    <a className="text-[14px] md:text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                      Program
                    </a>
                  </li>
                  <li>
                    <a className="text-[14px] md:text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                      Explore
                    </a>
                  </li>
                  <li>
                    <a className="text-[14px] md:text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                      Attend
                    </a>
                  </li>
                  <li>
                    <a className="text-[14px] md:text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="lg:w-[200px] md:w-1/2 w-full">
              <nav className="list-none border-b-2 border-[#E0AA51] text-start md:border-0">
                <div className="ml-[44px] my-4 flex flex-col justify-start">
                  <a className="text-[14px] md:text-[17px] font-normal leading-[40px] w-full text-start">
                    Shop
                  </a>
                  <a className="text-[14px] md:text-[17px] font-normal leading-[40px] w-full text-start">
                    Support
                  </a>
                  <a className="text-[14px] md:text-[17px] font-normal leading-[40px] w-full text-start">
                    Your Privacy Choices
                  </a>
                  <a className="text-[14px] md:text-[17px] font-normal leading-[40px] w-full text-start">
                    Privacy Policy
                  </a>
                  <a className="text-[14px] md:text-[17px] font-normal leading-[40px]  w-full text-start">
                    Terms of Use
                  </a>
                </div>
              </nav>
            </div>
            <div className="lg:w-[200px] md:w-1/2 w-full">
              <nav className="list-none border-b-2 border-[#E0AA51] text-start md:border-0">
                <div className="ml-[44px] my-4 flex flex-col justify-start">
                  <a className="text-[14px] md:text-[17px] font-normal leading-[40px] w-full text-start">
                    Web Accessibility
                  </a>
                  <a className="text-[14px] md:text-[17px] font-normal leading-[40px] w-full text-start">
                    Sponsors & Partners
                  </a>
                  <a className="text-[14px] md:text-[17px] font-normal leading-[40px] w-full text-start">
                    Accessibility
                  </a>
                  <a className="text-[14px] md:text-[17px] font-normal leading-[40px] w-full text-start">
                    Contact Us
                  </a>
                </div>
              </nav>
            </div>
            <div className="lg:w-[391px] lg:col-span-2 border-b-2 border-[#E0AA51] w-full py-4 md:px-0 md:border-0">
              <div className="max-w-[300px] lg:max-w-[370px] md:w-full w-full ml-[44px]">
                <form className="w-full text-start">
                  <header className="text-[22px] font-normal leading-[45px] text-start">
                    Straight to your Inbox
                  </header>
                  <div className="relative rounded-full my-2 w-full bg-[#FFD19A] h-[43.943px] flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="outline-none text-[14px] md:text-[17px] text-[black] placeholder-[#C06F39] px-5 bg-transparent"
                    />
                    <button className="bg-[#A34411] text-base rounded-full w-[118px] h-full text-center absolute right-0">
                      Submit
                    </button>
                  </div>
                  <span className="text-[12px] font-normal leading-[26px] mt-[15px]">
                    Sign up to keep updated on festival news, announcements, and
                    exclusive ticket offers
                  </span>
                </form>
              </div>
            </div>

            <div className="lg:w-auto md:w-1/2 w-full md:hidden">
              <nav className="list-none border-[#E0AA51] text-start md:border-0 h-full">
                <div className="ml-[44px] my-4 flex items-center justify-between">
                  <span>
                    © 2023 Tanweer <br />
                    Festival
                  </span>
                  <a href="#" className="mr-[39px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <path
                        d="M15.0194 18.4653L13.7838 16.6973L3.95267 2.63497H8.18523L16.1191 13.9838L17.3547 15.751L27.6677 30.5027H23.4352L15.0194 18.4653ZM27.6664 0.560547L17.5696 12.2971L9.50528 0.560547H0.204102L12.3989 18.3083L0.204102 32.4828H2.95978L13.6223 20.0886L22.1387 32.4828H31.4399L18.793 14.0774L30.4219 0.560547H27.6664Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
