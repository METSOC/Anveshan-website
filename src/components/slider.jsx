import { useState, useEffect } from "react";
import first from "../../public/1.svg";
import second from "../../public/2.svg";
import third from "../../public/3.svg";
import fourth from "../../public/4.svg";
import first_r from "../../public/1_r.svg";
import second_r from "../../public/2_r.svg";
import third_r from "../../public/3_r.svg";
import fourth_r from "../../public/4_r.svg";

const images = [
  {
    url: `${first}`,
    text: "First Image",
  },
  {
    url: `${second}`,
    text: "Second Image",
  },
  {
    url: `${third}`,
    text: "Third Image",
  },
  {
    url: `${fourth}`,
    text: "Fourth Image",
  },
];

const images_r = [
  {
    url: `${first_r}`,
    name: "ABC",
    work: "PQR",
  },
  {
    url: `${second_r}`,
    name: "DEF",
    work: "STU",
  },
  {
    url: `${third_r}`,
    name: "HIJ",
    work: "VWX",
  },
  {
    url: `${fourth_r}`,
    name: "KLM",
    work: "YZ",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      <div className="flex flex-col gap-96">
        <div className="relative">
          <div className="w-[245px] h-[298px] ">
            {images_r.map((image, index) => (
              <div
                key={index}
                className={`absolute transition-transform duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                } flex flex-row gap-40`}
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-[535px] h-[618px] object-cover"
                />
                <div className="flex flex-col mt-40">
                  <h1 className="w-full text-white font-jost text-5xl font-semibold">
                    {image.name}
                  </h1>
                  <h1 className="w-full text-white font-jost text-2xl font-medium">
                    {image.work}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex flex-row gap-4">
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-1/4">
                <img
                  src={image.url}
                  alt={image.text}
                  className={`w-[245px] h-[298px] `}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="absolute ml-[-100px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-[#F07946] text-5xl px-3 py-2 rounded-full opacity-75 hover:opacity-100"
        onClick={goToPrevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute mr-[-100px] top-1/2 right-1 transform -translate-y-1/2 bg-gray-800 text-[#F07946] text-5xl px-3 py-2 rounded-full opacity-75 hover:opacity-100"
        onClick={goToNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
