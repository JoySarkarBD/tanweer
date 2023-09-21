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
                  ? "active text-[#ffe88c] px-10 text-[32px] h-[93px] "
                  : "px-10 text-[#e0aa51] text-[32px] h-[93px] "
              }`}
              onClick={() => handleTabClick(index)}>
              {tab}
            </div>
          ))}
        </div>

        <div className='tab-content'>
          {tabs[activeTab] === "Festival Mission" && (
            <>
              <div className='flex justify-around pt-[100px] '>
                <div className='pt-[100px] w-[425px] h-[672px]'>
                  <img
                    src={festiveImg}
                    alt=''
                    className='max-w-[425px] w-full '
                  />
                </div>

                <div>
                  <div className='w-[862px] '>
                    <h1 className='text-[#FFF7E0] text-[65px] font-medium leading-[70px] '>
                      It is through music that we <br /> can become enlightened{" "}
                      <br /> and connected to the <br /> divine.
                    </h1>
                  </div>

                  <div className='pl-16 text-[#FFF7E0] pt-[70px] '>
                    <p>
                      This is why we are bringing together artists from <br />{" "}
                      around the world who understand our message, <br /> and
                      the need to revive and bring back our ancient <br />{" "}
                      wisdom through sacred songs and traditional <br /> music –
                      music that will help us remember our past <br /> and
                      revive our traditions. This is Tanweer.
                    </p>

                    <p>
                      Tanweer means enlightenment – a meeting of <br /> minds
                      and hearts. Tanweer will bring together the <br /> keepers
                      of wisdom to raise our collective <br /> frequency and
                      connect us with our past. Thank you <br /> for joining us.
                      With love and gratitude, <br /> Bodour Al Qasimi <br />
                      Alchemist & Guardian
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
