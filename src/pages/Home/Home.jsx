import AboutPrograms from "../../components/AboutPrograms/AboutPrograms";
import Banner from "../../components/Banner/Banner";
import Explore from "../../components/Explore/Explore";
import Features from "../../components/Features/Features";
import FestivalTotems from "../../components/FestivalTotems/FestivalTotems";
import Newsletter from "../../components/Newsletter/Newsletter";
import Program from "../../components/Program/Program";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutPrograms />
      <Program />
      <Explore />
      <FestivalTotems />
      <Features />
      <Newsletter />
    </>
  );
}
