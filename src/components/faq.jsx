import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import border from "../../public/border.svg";

export function FAQ() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const gradientText = {
    backgroundImage: "linear-gradient(to right, #F07946, #FEAB88)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  };

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <h1
            className="font-jost text-[60px] font-semibold mt-20 "
            style={gradientText}
          >
            FAQs
          </h1>
        </div>
        <img src={border} className="z-[-1] mt-20 w-[300px]" />
      </div>
      <Accordion
        open={open === 1}
        className="mb-2 rounded-full px-4 bg-[#1B1B1B] text-white lg:w-[1010px] w-[350px] font-jost font-light"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`transition-colors text-sm lg:text-xl w-[300px] lg:w-[1000px] ${
            open === 1 ? "ml-5 text-[#E17343]" : "ml-5"
          }`}
        >
          Can I register for multiple events?
          <FaChevronDown
            className={`lg:ml-[600px] ml-20 text-3xl ${
              open === 1 ? "hidden" : "text-[#E17343]"
            }`}
          />
          <FaChevronUp
            className={`lg:ml-[600px] ml-20 text-3xl ${
              open === 1 ? "text-white" : "hidden"
            }`}
          />
        </AccordionHeader>
        <AccordionBody className="pt-0 font-jost lg:text-xl text-sm ml-6 mr-7 w-[250px] lg:w-[900px]">
          Certainly, you are welcome to participate in any of the events and
          competitions according to your preferences, including the various
          options available. To do so, kindly proceed to register for as many
          events as you desire through the form provided.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 2}
        className="mb-2 rounded-full px-4 bg-[#1B1B1B] text-white lg:w-[1010px] w-[350px] font-jost font-light"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`transition-colors text-sm lg:text-xl w-[300px] lg:w-[1000px] ${
            open === 2 ? "ml-5 text-[#E17343]" : "ml-5"
          }`}
        >
          How do I keep track of regular updates?
          <FaChevronDown
            className={`lg:ml-[554px] text-3xl ml-12 ${
              open === 2 ? "hidden" : "text-[#E17343]"
            }`}
          />
          <FaChevronUp
            className={`lg:ml-[554px] text-3xl ml-12 ${
              open === 2 ? "text-white" : "hidden"
            }`}
          />
        </AccordionHeader>
        <AccordionBody className="pt-0 font-jost lg:text-xl text-sm ml-5 w-[250px] lg:w-[900px]">
          It is advisable to routinely check your emails and follow the official
          social media handles of Anveshan for any updates related to the
          festival.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 3}
        className="mb-2 rounded-full px-4 bg-[#1B1B1B] text-white lg:w-[1010px] w-[350px] font-jost font-light"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`transition-colors text-sm lg:text-xl w-[300px] lg:w-[1000px] ${
            open === 3 ? "ml-5 text-[#E17343]" : "ml-5"
          }`}
        >
          Which documents do I need to carry?
          <FaChevronDown
            className={`lg:ml-[575px] text-3xl ml-14 ${
              open === 3 ? "hidden" : "text-[#E17343]"
            }`}
          />
          <FaChevronUp
            className={`lg:ml-[575px] text-3xl ml-14 ${
              open === 3 ? "text-white" : "hidden"
            }`}
          />
        </AccordionHeader>
        <AccordionBody className="pt-0 font-jost lg:text-xl text-sm ml-5 w-[250px] lg:w-[900px]">
          To facilitate the verification of your identity, it is imperative that
          you carry both your current college ID card and a government-issued ID
          card. It is essential for every individual to possess their respective
          college ID card at all times while on our campus premises.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 4}
        className="mb-2 rounded-full px-4 bg-[#1B1B1B] text-white lg:w-[1010px] w-[350px] font-jost font-light"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`transition-colors text-sm lg:text-xl w-[300px] lg:w-[1000px] ${
            open === 4 ? "ml-5 text-[#E17343]" : "ml-5"
          }`}
        >
          Is the participation in Events/Guests Lectures paid?
          <FaChevronDown
            className={`lg:ml-[478px] text-3xl ${
              open === 4 ? "hidden" : "text-[#E17343]"
            }`}
          />
          <FaChevronUp
            className={`lg:ml-[478px] text-3xl ${
              open === 4 ? "text-white" : "hidden"
            }`}
          />
        </AccordionHeader>
        <AccordionBody className="pt-0 font-jost lg:text-xl text-sm ml-5 w-[250px] lg:w-[900px]">
          No, you need to pay a particular amount if you are not a student from
          IIT (BHU), the amount shall be mentioned in the registration form.
        </AccordionBody>
      </Accordion>
    </>
  );
}
