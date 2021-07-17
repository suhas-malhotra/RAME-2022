import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */

import Logo from "../../assets/img/logo.png";

// EXTERNAL CSS
import "../../assets/css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <a class="navbar-brand" href="#">
        <img
          src={Logo}
          width="80"
          height="60"
          class="d-inline-block align-top"
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
          <ul className="navbar-nav ml-auto mr-3">
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
              <Link to="/gallery" className="nav-link mx-2">
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link mx-2" to="/speakers">
                Speakers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link mx-2" to="/important-dates">
                Important Dates
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link mx-2" to="/contact-us">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};
export default Navbar;
