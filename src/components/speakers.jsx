import bg from "../../public/bg.svg";
import Slider from "./slider";
import border from "../../public/border.svg";

const backgroundImageUrl = `url(${bg})`;

const gradientText = {
  backgroundImage: "linear-gradient(to right, #F07946, #FEAB88)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  display: "inline-block",
};

const Speaker = () => {
  return (
    <div
      style={{
        backgroundImage: backgroundImageUrl,
        backgroundSize: "",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <h1
              className="font-jost text-[60px] font-semibold mt-20 "
              style={gradientText}
            >
              SPEAKERS
            </h1>
          </div>
          <img src={border} className="z-[-1] mt-20" />
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Speaker;
