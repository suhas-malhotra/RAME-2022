/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-has-content

// EXTERNAL CSS
import { Link } from "react-router-dom";
import "../../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="page-footer font-small lighten-3 pt-4 text-white">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 ">
            <h5 className="font-weight-bold text-uppercase mb-4 text-white">
              RAME
            </h5>
            <p className="text-white">
              The main objective of RAME-2022 is to provide an opportunity for
              leading academicians, engineers, scientists, researchers,
              industrial professionals and students from around the world to
              network and have scientific discussions on the latest developments
              in the fields of Mechanical engineering.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 ">
            <h5 className="font-weight-bold text-uppercase mb-4 text-white">
              About
            </h5>

            <ul className="list-unstyled">
              <li>
                <p>
                  <Link to="/" className="footer-link">
                    {" "}
                    DTU
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/" className="footer-link">
                    {" "}
                    RAME
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/important-dates" className="footer-link">
                    {" "}
                    Important Dates
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/contact-us" className="footer-link">
                    {" "}
                    Contact Us
                  </Link>
                </p>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 ">
            <h5 className="font-weight-bold text-uppercase mb-4 text-white">
              Address
            </h5>

            <ul className="list-unstyled text-white">
              <li>
                <p>
                  <ion-icon
                    name="business-outline"
                    style={{ color: "white" }}
                  ></ion-icon>{" "}
                  Bawana Rd, Delhi Technological University, Shahbad Daulatpur
                  Village, Rohini, Delhi, 110042
                </p>
              </li>
              <li>
                <p>
                  <ion-icon
                    name="mail-outline"
                    style={{ color: "white" }}
                  ></ion-icon>
                  {"  "}
                  info@example.com
                </p>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
            <h5 className="font-weight-bold text-uppercase mb-4 text-white">
              See More
            </h5>
            <a
              type="button"
              className="btn-floating btn-fb"
              href="https://www.youtube.com/channel/UCqvGdx5qNhCtJHWEZceIWPg"
            >
              <ion-icon
                name="logo-youtube"
                size="large"
                style={{ color: "white" }}
              ></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3 text-white">
        Made by the students of Delhi Technological University
      </div>
    </footer>
  );
};

export default Footer;
