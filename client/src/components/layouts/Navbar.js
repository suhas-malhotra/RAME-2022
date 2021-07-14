/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../../assets/img/logo.png";

// EXTERNAL CSS
import "../../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
          <img
            src={Logo}
            width="100"
            height="80"
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
              <a className="nav-link mx-2" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link mx-2" href="/call-for-papers">
                Call for Papers
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link mx-2" href="/gallery">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link mx-2" href="/speakers">
                Speakers
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link mx-2" href="/important-dates">
                Important Dates
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link mx-2" href="/contact-us">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
