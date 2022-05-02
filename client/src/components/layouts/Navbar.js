import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */

import Logo from "../../assets/img/logo.png";
import DTULogo from "../../assets/img/dtuLogo.jpeg";
import Azadi from "../../assets/img/AZADI.png";
import HBTULogo from "../../assets/img/HBTU.png";
// EXTERNAL CSS
import "../../assets/css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <a class="navbar-brand" href="#">
        <img
          src={Azadi}
          width="60"
          height="60"
          class="d-inline-block align-top ml-2"
          alt="Rame'22"
        />
        <img
          src={DTULogo}
          width="70"
          height="60"
          class="d-inline-block align-top "
          alt="Rame'22"
        />
        <img
          src={Logo}
          width="60"
          height="60"
          class="d-inline-block align-top ml-2"
          alt="Rame'22"
        />

        <img
          src={HBTULogo}
          width="60"
          height="60"
          class="d-inline-block align-top ml-3"
          alt="Rame'22"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <ion-icon name="menu" size="large"></ion-icon>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link mx-2" to="/call-for-papers">
              Call for Papers
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link mx-2" to="/publication">
              Publication
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/speakers">
              Speakers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/committee">
              Committee
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link mx-2">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
        {/* <img
          src={DTULogo}
          width="70"
          height="60"
          class="d-inline-block align-top hidden"
          alt="Rame'22"
        />
        <img
          src={HBTULogo}
          width="50"
          height="60"
          class="d-inline-block align-top hidden"
          alt="Rame'22"
        /> */}
      </div>
    </nav>
  );
};
export default Navbar;
