import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { AboutUS } from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import { ContactUs } from "./components/ContactUs";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
