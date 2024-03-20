import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Homepage from "./pages/Homepage";
import Events from "./pages/Events";
import ContactUs from "./components/ContactUs/ContactUs";
import About from "./pages/About";
// import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Registration type="login" />} />
        <Route path="/signup" element={<Registration type="signup" />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
