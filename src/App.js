import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Courses from "./Component/Courses";
import Contact from "./Component/Contact";
import Services from "./Component/Services";
import Auth from "./Component/Auth";
import Footer from "./Component/Footer";

function App() {
  const { pathname } = useLocation();
  const hideLayout = pathname === "/login" || pathname === "/signup";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {!hideLayout ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/signup" element={<Auth mode="signup" />} />
      </Routes>


      {!hideLayout ? <Footer /> : null}
    </div>
  );
}

export default App;
