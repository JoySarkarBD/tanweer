import instagram from "./../../../assets/Instagram.png";
import logo from "./../../../assets/logo-white.png";
const Footer = () => {
  return (
    <>
      <footer className="text-white cursor-pointer body-font bg-[#BE7649]">
        <div className="footer_container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          {/* First Column */}
          <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="max-w-[325.413px] min-h-[76.232px]">
              <img src={logo} className="w-full h-full" alt="logo" />
            </div>
            <div className="flex justify-center gap-x-10 text-white mt-[72px]">
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

          <div className="flex-grow flex flex-wrap justify-between md:pl-10 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-auto md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                    Belief
                  </a>
                </li>
                <li>
                  <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                    Program
                  </a>
                </li>
                <li>
                  <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                    Explore
                  </a>
                </li>
                <li>
                  <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                    Attend
                  </a>
                </li>
                <li>
                  <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                    Blog
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-auto md:w-1/2 w-full px-4">
              <nav className="list-none mb-10 flex flex-col">
                <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                  Shop
                </a>
                <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                  Support
                </a>
                <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                  Your Privacy Choices
                </a>
                <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                  Privacy Policy
                </a>
                <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                  Terms of Use
                </a>
              </nav>
            </div>
            <div className="lg:w-auto md:w-1/2 w-full px-4">
              <nav className="list-none mb-10 flex flex-col">
                <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                  Web Accessibility
                </a>
                <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                  Wristband Terms of Use
                </a>
                <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                  Sponsors & Partners
                </a>
                <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                  Accessibility
                </a>
                <a className="text-[17px] font-normal leading-[40px] text-center w-full lg:text-start">
                  Contact Us
                </a>
              </nav>
            </div>
            <div className="lg:w-[381px] md:w-1/2 w-full px-4">
              <form className="w-full lg:max-w-[391px]">
                <header className="text-[26px] font-normal leading-[45px]">
                  Straight to your Inbox
                </header>
                <div className="relative rounded-full my-2  w-full bg-white h-[51.908px] flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="outline-none text-base text-[black] placeholder-[#C06F39] px-5 bg-transparent"
                  />
                  <button className="bg-[#A34411] text-base rounded-full max-w-[142px] w-full h-full">
                    Submit
                  </button>
                </div>
                <span className="text-base font-normal leading-[26px] mt-[15px]">
                  Sign up to keep updated on festival news, announcements, and
                  exclusive ticket offers
                </span>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
