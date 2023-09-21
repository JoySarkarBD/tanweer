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
      <div className='container pt-[80px] bg-[#C06F39] '>
        <div className='tabs flex justify-center items-center'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={` tab ${
                index === activeTab
                  ? "active text-[#ffe88c] xl:px-10 lg:px-7 md:px-3 xl:text-[32px] lg:text-[28px] md:text-[24px] h-[93px]  "
                  : " xl:px-10 lg:px-7 md:px-3 text-[#e0aa51] xl:text-[32px] lg:text-[28px] md:text-[24px] h-[93px]  "
              }`}
              onClick={() => handleTabClick(index)}>
              {tab}
            </div>
          ))}
        </div>

        <div className='tab-content'>
          {tabs[activeTab] === "Festival Mission" && (
            <>
              <div className='flex justify-around xl:pt-[100px] lg:pt-[80px] md:pt-[60px] '>
                <div className='pt-[100px] xl:max-w-[425px] lg:max-w-[380px] md:max-w-[320px]  xl:h-[672px] lg:h-[630px] md:h-[580px] '>
                  <img src={festiveImg} alt='' className=' w-full ' />
                </div>

                <div>
                  <div className='xl:w-[882px] lg:w-[700px] md:w-[450px]   '>
                    <h1 className='text-[#FFF7E0] 2xl:text-[64px] xl:text-[54px] lg:text-[44px] md:text-[30px] font-medium 2xl:leading-[90px] xl:leading-[80px] lg:leading-[70px] md:leading-[50px] flex justify-end'>
                      It is through music that we <br /> can become enlightened
                      and
                      <br /> connected to the divine.
                    </h1>
                  </div>

                  <div className='text-[#FFF7E0] xl:pt-[70px] lg:pt-[55px] md:pt-[45px] xl:w-[631px] lg:w-[475px] md:w-[300px] flex flex-col  ms-auto'>
                    <p className=' xl:text-[26px] lg:text-[22px] md:text-[18px] pb-[26px] flex justify-end'>
                      This is why we are bringing together artists from around
                      the world who understand our message, and the need to
                      revive and bring back our ancient wisdom through sacred
                      songs and traditional music – music that will help us
                      remember our past and revive our traditions. This is
                      Tanweer.
                      <br />
                      <br />
                      Tanweer means enlightenment – a meeting of minds and
                      hearts. Tanweer will bring together the keepers of wisdom
                      to raise our collective frequency and connect us with our
                      past. Thank you for joining us. With love and gratitude,
                      <br />
                      <br />
                      Bodour Al Qasimi
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
