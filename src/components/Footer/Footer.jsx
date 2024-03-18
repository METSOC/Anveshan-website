
import {  TERipple } from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa"; 
const Footer = () => {
  return (
    <div>
      
      <footer className=" text-center text-black">
        <div className="text-5xl font-libre tracking-wide">
        <h1>
          METSOC
        </h1>
      </div>
      <div className="mt-5">
        <h2 className="text-3xl text-dark-grey">Metallurgy Society, IIT (BHU)</h2>
      </div>
        <div className="container px-6 pt-6 mx-auto">
          <div className="mb-3 flex justify-center w-full gap-x-14 mt-10 ">

            <TERipple rippleColor="light">
              <a
                type="button"
                className="m-2 h-9 w-9 leading-normal rounded-xl px-2 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              ><FaLinkedin className="text-3xl"></FaLinkedin>
                
              </a>
            </TERipple>

            <TERipple rippleColor="light">
              <a
                type="button"
                className="m-2 h-9 w-9 leading-normal rounded-xl px-2 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                 <FaInstagram className="text-3xl"/>
              </a>
            </TERipple>
            <TERipple rippleColor="light">
              <a
                type="button"
                className="m-2 h-9 w-9 leading-normal rounded-xl px-2 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                 <MdFacebook className="text-3xl"/>
              </a>
            </TERipple>
            <TERipple rippleColor="light">
              <a
                type="button"
                className="m-2 h-9 w-9 leading-normal rounded-xl px-2 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                 <FaXTwitter className="text-3xl"/>
              </a>
            </TERipple>
            <TERipple rippleColor="light">
              <a
                type="button"
                className="m-2 h-9 w-9 leading-normal rounded-xl px-2 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                 <FaYoutube className="text-3xl"/>
              </a>
            </TERipple>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="p-2 pt-1 pb-8 text-center text-xl bg-opacity-20">
          For more Contact: 9876543215
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
