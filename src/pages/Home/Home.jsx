import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import FestivalTotems from "../../components/FestivalTotems/FestivalTotems";
import Newsletter from "../../components/Newsletter/Newsletter";
import Program from "../../components/Program/Program";

export default function Home() {
  return (
    <>
      <Banner />
      <Program/>
      <FestivalTotems/>
      <Features />
      <Newsletter />
    </>
  );
}
