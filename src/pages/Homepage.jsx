import { Link } from "react-router-dom";
import hero from "../../public/hero.svg";
import CountdownTimer from "../components/countdown";
import Speaker from "../components/speakers";
import Slider from "../components/slider";
import { FAQ } from "../components/faq";
import bg from "../../public/bg.svg";
import Navbar from "../components/Navbar";

const backgroundImageUrl = `url(${hero})`;
const backgroundImageUrl2 = `url(${bg})`;
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
         <Navbar />
        <div className="flex flex-col">
          <div className=" w-100 flex justify-center font-bold">
            {" "}
            <div className="mt-10"></div>
          </div>

          <div className="flex flex-row">
            <h1 className="text-white text-[200px] font-jost mt-32 ml-64">
              reborn
            </h1>
            <div className="flex flex-col justify-center items-center xl:p-36 lg:p-1 mt-28">
              <h1 className="text-white xl:text-[50px] lg:text-[50px] text-[20px] sm:text-[40px] font-jost">
                +9y
              </h1>
              <h1 className="text-white xl:text-2xl lg:text-2xl font-jost xl:mt-[-15px] lg:mt-[-15px] mt-[-8px] xl:ml-6 lg:ml-6 text-[10px] sm:text-[15px] sm:mt-[-10px]">
                legacy
              </h1>
            </div>
          </div>
          <div className="flex flex-row xxl:gap-60 lg:gap-0 justify-center">
            <h1 className="text-white xl:w-[350px] xl:h-[111px] xl:ml-10 lg:w-[350px] lg:h-[111px] lg:ml-40 hidden xl:block">
              It provided internships in various companies, organizations and
              universities like DRDO, JSPL, Hindalco, University of Vienna
              (Austria), Jacobs University, IISc Bangalore and many more
              including 35+ domestic and international internships that too in
              core metallurgy and material science sector.
            </h1>
            <div className="flex flex-row items-center xl:gap-8 xl:mt-[-140px] lg:gap-8 lg:mt-[-90px] justify-center gap-2 ml-40 lg:ml-[460px] xl:ml-40">
              <h1
                className="text-white xl:text-5xl lg:text-3xl font-jost xl:mt-14 lg:mt-14 mt-6 text-[18px]
              sm:text-[25px]"
              >
                and
              </h1>
              <h1 className="text-white xl:text-[200px] lg:text-[150px] font-jost text-[80px] sm:text-[120px]">
                ready
              </h1>
              <h1 className="text-white xl:text-5xl lg:text-3xl font-jost xl:mt-14 lg:mt-14 mt-6 text-[18px] sm:text-[25px]">
                to
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center xl:mr-96 mr-56">
            <h1 className="text-white xl:text-[200px] lg:text-[150px] font-jost xl:mt-[-100px] lg:mt-[-100px] text-[80px] sm:text-[120px]">
              soar
            </h1>
            <div className="flex flex-col justify-center xl:mr-[37rem] lg:mr-[15rem] mt-[-20px]">
              <h1 className="text-white xl:text-[40px] lg:text-[40px] font-jost xl:mt-[-80px] lg:mt-[-10px] text-[20px] sm:text-[30px]">
                +8k INR
              </h1>
              <h1 className="text-white xl:text-xl lg:text-xl font-jost xl:mt-[-15px] xl:ml-10 lg:mt-[-15px] lg:ml-10 text-[10px] ml-3 mt-[-8px] mr-36 sm:text-[15px] sm:ml-6">
                worth prizes
              </h1>
            </div>
          </div>

          <div className="flex flex-col mt-[50px] justify-center items-center xl:ml-[850px] lg:ml-[700px] ml-80">
            <h1 className="text-white xl:text-[40px] lg:text-[40px] font-jost xl:mt-[-80px] lg:mt-[-80px] text-[20px] sm:text-[30px]">
              +500
            </h1>
            <h1 className="text-white xl:text-xl lg:text-xl font-jost xl:mt-[-15px] xl:ml-4 lg:mt-[-15px] lg:ml-4 text-[10px] mt-[-8px] sm:text-[15px] sm:ml-6">
              participants
            </h1>
          </div>
          <div className="flex sm:flex-col sm:items-center items-center">
            <div className="flex lg:flex-row flex-col sm:items-center items-center justify-center bg-[#1B1B1B] w-[350px] md:w-full sm:w-full xl:w-[1263px] lg:h-[100px] lg:w-[1000px] sm:h-full h-[110px] rounded-full sm:gap-12 gap-2 mt-48 sm:p-9 lg:p-0">
              <h1 className="text-white font-jost lg:text-2xl text-sm sm:text-2xl md:text-2xl xl:text-3xl 2xl:text-3xl">
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

      <Speaker />
    </>
  );
};

export default Homepage;
