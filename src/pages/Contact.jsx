import hero from "../../public/hero.svg";
import Navbar from "../components/Navbar";

const backgroundImageUrl = `url(${hero})`;
const Contact = () => {
  const targetDate = new Date();

  targetDate.setDate(targetDate.getDate() + 7 * 4);

  return (
    <>
    <Navbar/>
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
       <p className="text-center h-[100vh] m-auto text-5xl text-white font-extrabold">Contact Us</p>
      </div>
    </>
  );
};

export default Contact;
