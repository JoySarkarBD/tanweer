import Program1 from "./Program1";
import Program2 from "./Program2";
import Program3 from "./Program3";

export default function Program() {
  return (
    <div className="bg-[#C06F39] py-24">
      <div className="container">
        <div className="text-center">
          <h3 className="text-[#FFE88C] md:text-[60px] leading-normal">
            Program
          </h3>
          <span className="md:text[30px] text-[#FFF7E0]">
            Mleiha, Sharjah –––– November 24 - 26, 2023
          </span>
        </div>

        {/* program 1 */}
        <Program1/>

        {/* program 2 */}
        <Program2/>

        {/* program 3 */}
        <Program3/>
      </div>
    </div>
  );
}
