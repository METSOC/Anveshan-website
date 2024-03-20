import { Link } from "react-router-dom";
import hero from "../../public/hero.svg";
import Navbar from "../components/Navbar";
import about1 from "../../public/about1.svg";
import about2 from "../../public/about2.svg";
import { FaCheckCircle } from "react-icons/fa";

const backgroundImageUrl = `url(${hero})`;
const About = () => {
  const targetDate = new Date();

  targetDate.setDate(targetDate.getDate() + 7 * 4);

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: "",
          backgroundPosition: "top",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-[#000000] w-full h-full font-jost"
      >
        <div className="flex flex-col">
          <div className="flex flex-row justify-center items-center gap-5">
            <p className="text-center text-5xl text-white font-extrabold mt-40">
              About
            </p>
            <p className="text-center text-5xl text-[#E17343] font-bold mt-40">
              Us
            </p>
          </div>

          <div className="flex flex-col lg:mt-60 mt-40">
            <div className="flex flex-col items-center justify-center lg:gap-28 gap-32">
              <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-60 gap-20">
                <div>
                  <img
                    src={`${about1}`}
                    className="lg:w-[650px] w-[250px] lg:h-[433px] h-[250px]"
                  />
                </div>
                <div className="flex flex-col lg:items-start items-center lg:w-[450px] w-[300px] gap-5 justify-center">
                  <h1 className="text-3xl text-[#959494]">About Us</h1>
                  <h1 className="text-4xl text-white font-medium">
                    We Aspire to Bring Changes
                  </h1>
                  <p className="text-xl text-[#959494]">
                    Anveshan is the annual techno-cultural fest of the
                    department of Metallurgical Engineering. Held during the
                    second weekend of April. Quizzes, workshops and competitions
                    are all organized in this event. It is where winners get to
                    bag their dream intern and numerous get to learn at
                    workshops like the one about Internet of Things.
                  </p>
                  <Link to="/contact">
                    <button
                      className="btn-orange bg-gradient-to-r from-[#F07946] to-[#FEAB88] hover:from-[#F07946] hover:to-[#FEAB88] sm:text-3xl text-sm sm:w-60 w-40"
                      type="submit"
                    >
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:gap-[350px] gap-10 items-center justify-center">
                <div className="flex flex-col lg:w-[650px] w-[300px] gap-10 justify-center items-center">
                  <h1 className="text-4xl text-white">Our Perks</h1>
                  <p className="text-xl text-[#959494]">
                    It provided internships in various companies, organizations
                    and universities like DRDO, JSPL, Hindalco, University of
                    Vienna (Austria), Jacobs University, IISc Bangalore and many
                    more.
                  </p>
                  <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center lg:gap-9 font-medium gap-8">
                    <div className="flex flex-row items-center justify-center lg:gap-10">
                      <h1 className="lg:text-2xl text-xl text-white">
                        International Lectures
                      </h1>
                      <FaCheckCircle className="text-[#E17343] lg:text-2xl text-xl" />
                    </div>
                    <div className="flex flex-row items-center justify-center lg:gap-10 gap-2">
                      <h1 className="lg:text-2xl text-xl text-white">
                        Workshops
                      </h1>
                      <FaCheckCircle className="text-[#E17343] lg:text-2xl text-xl" />
                    </div>
                    <div className="flex flex-row items-center justify-center lg:gap-10 gap-2">
                      <h1 className="lg:text-2xl text-xl text-white">
                        Technical Events
                      </h1>
                      <FaCheckCircle className="text-[#E17343] lg:text-2xl text-xl" />
                    </div>
                    <div className="flex flex-row items-center justify-center lg:gap-10 gap-2">
                      <h1 className="lg:text-2xl text-xl text-white">
                        Cultural Events
                      </h1>
                      <FaCheckCircle className="text-[#E17343] lg:text-2xl text-xl" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center gap-20">
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-white">+9y</h1>
                    <h1 className="text-xl text-white">legacy</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-white">+500</h1>
                    <h1 className="text-xl text-white">participants</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-white">+8k INR</h1>
                    <h1 className="text-xl text-white">worth prizes</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-white">+35</h1>
                    <h1 className="text-xl text-white">internships</h1>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col items-center justify-center h-full mb-40">
                <div className="absolute flex flex-col items-center justify-center">
                  <h1 className="font-jost lg:text-4xl text-3xl font-semibold text-white text-center">
                    Seize the opportunity to engage in the tech and cultural
                    convergence.
                  </h1>
                  <Link to="/contact">
                    <button
                      className="btn-orange bg-gradient-to-r from-[#F07946] to-[#FEAB88] hover:from-[#F07946] hover:to-[#FEAB88] sm:text-3xl text-sm sm:w-60 w-40 mt-4"
                      type="submit"
                    >
                      Register
                    </button>
                  </Link>
                </div>
                <img
                  src={about2}
                  className=":w-[1024px] h-[370px] "
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
