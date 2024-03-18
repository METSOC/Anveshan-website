import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Homepage from "./pages/Homepage";
import Events from "./pages/Events";
import ContactUs from "./components/ContactUs/ContactUs";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Registration type="login" />} />
        <Route path="/signup" element={<Registration type="signup" />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
    </>
  );
}

export default App;
