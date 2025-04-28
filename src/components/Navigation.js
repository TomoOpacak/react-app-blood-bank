import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Donor from "./Donor";
import Home from "./Home";
import AboutUs from "./AboutUs";
import "../css/navigation-style.css";
const Navigation = () => {
  return (
    <BrowserRouter>
      <div>
        {/* NAVIGACIJA  */}
        <nav>
          <Link className="site-link" to="/">
            BloodBank.com
          </Link>

          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/donor">Donor</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
