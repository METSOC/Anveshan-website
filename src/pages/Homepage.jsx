import { Link } from "react-router-dom";
import hero from "../../public/hero.svg";
import CountdownTimer from "../components/countdown";
import Speaker from "../components/speakers";
import Slider from "../components/slider";

const backgroundImageUrl = `url(${hero})`;
const Homepage = () => {
  const targetDate = new Date();

  targetDate.setDate(targetDate.getDate() + 7 * 4);

  return (
    <>
      <div
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: "",
          backgroundPosition: "top",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-[#000000] w-full h-full"
      >
        <div className="flex flex-col justify-center bg-[#00000060] items-center">
          <div className="flex flex-row justify-center sm:gap-[320px] gap-24">
            <h1 className="text-white sm:text-[200px] text-[80px] font-jost sm:mt-32 mt-48">
              reborn
            </h1>
            <div className="flex flex-col justify-center items-center sm:p-36 mt-28">
              <h1 className="text-white sm:text-[50px] text-[20px] font-jost">
                +9y
              </h1>
              <h1 className="text-white sm:text-2xl font-jost sm:mt-[-15px] mt-[-8px] sm:ml-6 text-[10px]">
                legacy
              </h1>
            </div>
          </div>
          <div className="flex flex-row sm:gap-60 justify-center">
            <h1 className="text-white sm:w-[350px] sm:h-[111px] sm:ml-10 hidden lg:block">
              It provided internships in various companies, organizations and
              universities like DRDO, JSPL, Hindalco, University of Vienna
              (Austria), Jacobs University, IISc Bangalore and many more
              including 35+ domestic and international internships that too in
              core metallurgy and material science sector.
            </h1>
            <div className="flex flex-row items-center sm:gap-8 sm:mt-[-140px] justify-center gap-2 ml-40">
              <h1 className="text-white sm:text-5xl font-jost sm:mt-14 mt-6 text-[18px]">
                and
              </h1>
              <h1 className="text-white sm:text-[200px] font-jost text-[80px]">
                ready
              </h1>
              <h1 className="text-white sm:text-5xl font-jost sm:mt-14 mt-6 text-[18px]">
                to
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:mr-96 mr-56">
            <h1 className="text-white sm:text-[200px] font-jost sm:mt-[-100px] text-[80px]">
              soar
            </h1>
            <div className="flex flex-col justify-center sm:mr-[37rem] mt-[-20px]">
              <h1 className="text-white sm:text-[40px] font-jost sm:mt-[-80px] text-[20px]">
                +8k INR
              </h1>
              <h1 className="text-white sm:text-xl font-jost sm:mt-[-15px] sm:ml-10 text-[10px] ml-3 mt-[-8px] mr-36">
                worth prizes
              </h1>
            </div>
          </div>

          <div className="flex flex-col mt-[50px] justify-center items-center sm:ml-[850px] ml-80">
            <h1 className="text-white sm:text-[40px] font-jost sm:mt-[-80px] text-[20px]">
              +500
            </h1>
            <h1 className="text-white sm:text-xl font-jost sm:mt-[-15px] sm:ml-4 text-[10px] mt-[-8px]">
              participants
            </h1>
          </div>
          <div className="flex sm:flex-col sm:items-center items-center">
            <div className="flex sm:flex-row flex-col sm:items-center items-center justify-center bg-[#1B1B1B] w-[350px] sm:w-[1263px] h-[100px] rounded-full sm:gap-12 gap-2 mt-48">
              <h1 className="text-white font-jost sm:text-3xl text-sm">
                TIME LEFT FOR LAUNCH
              </h1>
              <CountdownTimer targetDate={targetDate} />
              <Link to="/signup">
                <button
                  className="btn-orange bg-gradient-to-r from-[#F07946] to-[#FEAB88] hover:from-[#F07946] hover:to-[#FEAB88] sm:text-3xl text-sm sm:w-60 w-40"
                  type="submit"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Speaker />
      </div>
    </>
  );
};

export default Homepage;
