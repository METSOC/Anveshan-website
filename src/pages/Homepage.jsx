import { Link } from "react-router-dom";
import hero from "../../public/hero.svg";
import CountdownTimer from "../components/countdown";
import Speaker from "../components/speakers";
import Slider from "../components/slider";
import Navbar from "../components/Navbar/Navbar";

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
          width: "100vw",
          height: "1288px",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-[#000000] w-full h-full "
      >
         
        <div className="flex flex-col">
          <div className=" w-100 flex justify-center font-bold"> <div className="mt-10">
           <Navbar/>
           </div></div>
        
          <div className="flex flex-row">
            
            <h1 className="text-white text-[200px] font-jost mt-32 ml-64">
              reborn
            </h1>
            <div className="flex flex-col mt-44 ml-[400px]">
              <h1 className="text-white text-[50px] font-jost">+9y</h1>
              <h1 className="text-white text-2xl font-jost mt-[-15px] ml-6">
                legacy
              </h1>
            </div>
          </div>
          <div className="flex flex-row gap-60">
            <h1 className="text-white ml-80 w-[350px] h-[111px]">
              It provided internships in various companies, organizations and
              universities like DRDO, JSPL, Hindalco, University of Vienna
              (Austria), Jacobs University, IISc Bangalore and many more
              including 35+ domestic and international internships that too in
              core metallurgy and material science sector.
            </h1>
            <div className="flex flex-row items-center gap-8 mt-[-140px]">
              <h1 className="text-white text-5xl font-jost mt-14">and</h1>
              <h1 className="text-white text-[200px] font-jost">ready</h1>
              <h1 className="text-white text-5xl font-jost mt-14">to</h1>
            </div>
          </div>
          <h1 className="text-white text-[200px] font-jost ml-[400px] mt-[-100px]">
            soar
          </h1>
          <div className="flex flex-col ml-[260px]">
            <h1 className="text-white text-[40px] font-jost mt-[-80px]">
              +8k INR
            </h1>
            <h1 className="text-white text-xl font-jost mt-[-15px] ml-10">
              worth prizes
            </h1>
          </div>

          <div className="flex flex-col ml-[1210px] mt-[50px]">
            <h1 className="text-white text-[40px] font-jost mt-[-80px]">
              +500
            </h1>
            <h1 className="text-white text-xl font-jost mt-[-15px] ml-4">
              participants
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center bg-[#1B1B1B] w-[1263px] h-[100px] rounded-full gap-12 mt-48 ml-60">
            <h1 className="text-white font-jost text-3xl">
              TIME LEFT FOR LAUNCH
            </h1>
            <CountdownTimer targetDate={targetDate} />
            <Link to="/register">
              <button
                className="btn-orange bg-gradient-to-r from-[#F07946] to-[#FEAB88] hover:from-[#F07946] hover:to-[#FEAB88] text-3xl w-60"
                type="submit"
              >
                Register
              </button>
            </Link>
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
