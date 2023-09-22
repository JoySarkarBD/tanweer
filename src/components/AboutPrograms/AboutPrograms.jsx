import { useState } from "react";
import festiveImg from "../../assets/sheikha-budoor.png";
import "./AboutPrograms.css";

export default function AboutPrograms() {
  // Initialize state to keep track of the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Create an array of tab items
  const tabs = [
    "Festival Mission",
    "Program",
    "Explore Tanweer",
    "The Location",
  ];

  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="container pt-[80px] bg-[#C06F39] ">
        <div className="tabs-border">
          <div className="mx-auto overflow-x-auto">
            <div className="w-full tabs flex flex-nowrap justify-center items-center xsm:w-[650px] sm:w-[655px] xmd:w-[660px] xmd:m-auto md:w-full lg:w-full ">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={` tab ${
                    index === activeTab
                      ? "active flex  flex-nowrap text-[#ffe88c] xl:px-10 lg:px-7 md:px-3 xmd:px-5 sm:px-5 xsm:px-5 xl:text-[32px] lg:text-[28px] md:text-[23px] xmd:text-[20px] sm:text-[18px] xsm:text-[18px] h-[93px] xsm:after:absolute  xsm:after:content-[''] xsm:after:w-full xsm:after:h-[2px] xsm:after:bg-white md:after:opacity-0 lg:after:h-0 after:left-0 after:bottom-0 after:block"
                      : " xl:px-10 lg:px-7 md:px-3 xmd:px-5 sm:px-5 xsm:px-5 text-[#e0aa51] xl:text-[32px] lg:text-[28px] md:text-[23px] xmd:text-[20px] sm:text-[18px] xsm:text-[18px] h-[93px] flex flex-nowrap "
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className='tabs flex flex-nowrap justify-center items-center overflow-x-scroll md:overflow-hidden  '>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={` tab ${
                index === activeTab
                  ? "active flex  flex-nowrap text-[#ffe88c] xl:px-10 lg:px-7 md:px-3 xmd:px-5 sm:px-5 xsm:px-5 xl:text-[32px] lg:text-[28px] md:text-[23px] xmd:text-[20px] sm:text-[18px] xsm:text-[18px] h-[93px]  "
                  : " xl:px-10 lg:px-7 md:px-3 xmd:px-5 sm:px-5 xsm:px-5 text-[#e0aa51] xl:text-[32px] lg:text-[28px] md:text-[23px] xmd:text-[20px] sm:text-[18px] xsm:text-[18px] h-[93px] flex flex-nowrap "
              }`}
              onClick={() => handleTabClick(index)}>
              {tab}
            </div>
          ))}
        </div> */}

        <div className="tab-content">
          {tabs[activeTab] === "Festival Mission" && (
            <>
              {/* desktop version */}
              <div className="hidden md:block">
                <div className="flex justify-around xl:pt-[100px] lg:pt-[80px] md:pt-[60px] ">
                  <div className="pt-[100px] xl:max-w-[425px] lg:max-w-[380px] md:max-w-[320px]  xl:h-[672px] lg:h-[630px] md:h-[580px] ">
                    <img src={festiveImg} alt="" className=" w-full " />
                  </div>

                  <div>
                    <div className="xl:w-[882px] lg:w-[700px] md:w-[450px]   ">
                      <h1 className="text-[#FFF7E0] 2xl:text-[64px] xl:text-[54px] lg:text-[44px] md:text-[30px] font-medium 2xl:leading-[90px] xl:leading-[80px] lg:leading-[70px] md:leading-[50px] flex justify-end">
                        It is through music that we <br /> can become
                        enlightened and
                        <br /> connected to the divine.
                      </h1>
                    </div>

                    <div className="text-[#FFF7E0] xl:pt-[70px] lg:pt-[55px] md:pt-[45px] xl:w-[631px] lg:w-[475px] md:w-[300px] flex flex-col  ms-auto">
                      <p className=" xl:text-[26px] lg:text-[22px] md:text-[18px] pb-[26px] flex justify-end">
                        This is why we are bringing together artists from around
                        the world who understand our message, and the need to
                        revive and bring back our ancient wisdom through sacred
                        songs and traditional music – music that will help us
                        remember our past and revive our traditions. This is
                        Tanweer.
                        <br />
                        <br />
                        Tanweer means enlightenment – a meeting of minds and
                        hearts. Tanweer will bring together the keepers of
                        wisdom to raise our collective frequency and connect us
                        with our past. Thank you for joining us. With love and
                        gratitude,
                        <br />
                        <br />
                        Bodour Al Qasimi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* mobile version */}
              <div className="block md:hidden">
                <div className="flex flex-col pt-[31px]">
                  <div className="xsm:w-[315px] sm:w-[325px] xmd:w-[390px] mx-auto pl-12">
                    <h3 className="text-[#FFF7E0] sm:text-[24px] xsm:text-[20px] xmd:text-[26px] text-left font-normal leading-[32px]">
                      It is through music that we <br /> can become enlightened{" "}
                      <br />
                      and connected to the divine.
                    </h3>
                  </div>

                  <div className="pt-[24px]     ">
                    <img
                      src={festiveImg}
                      alt=""
                      className="xsm:w-[204px] sm:w-[234px] xmd:w-[264px] w-full mx-auto"
                    />
                  </div>

                  <div className="xsm:w-[319px] sm:w-[329px] xmd:w-[399px] mx-auto pt-[32px] pl-12">
                    <p className="text-[#FFF7E0] sm:text-[18px] xsm:text-[14px] xmd:text-[20px] text-left font-normal leading-[26px]">
                      This is why we are bringing together <br /> artists from
                      around the world who <br /> understand our message, and
                      the <br /> need to revive and bring back our <br />{" "}
                      ancient wisdom through sacred <br /> songs and traditional
                      music – music <br /> that will help us remember our past{" "}
                      <br />
                      and revive our traditions. This is <br /> Tanweer.
                      <br />
                      <br />
                      Tanweer means enlightenment – a <br /> meeting of minds
                      and hearts. <br /> Tanweer will bring together the <br />{" "}
                      keepers of wisdom to raise our <br /> collective frequency
                      and connect us <br /> with our past. Thank you for joining{" "}
                      <br />
                      us. With love and gratitude,
                      <br />
                      <br />
                      Bodour Al Qasimi <br /> Alchemist & Guardian
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {tabs[activeTab] === "Program" && <p>Content for Tab 2</p>}
          {tabs[activeTab] === "Explore Tanweer" && <p>Content for Tab 3</p>}
          {tabs[activeTab] === "The Location" && <p>Content for Tab 4</p>}
        </div>
      </div>
    </>
  );
}
