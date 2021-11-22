import React from "react";

import Navbar from "../../components/layouts/Navbar";

import MovingHeader from "../../components/layouts/MovingHeader";
import img from "../../assets/img/time.png";
import Footer from "../../components/layouts/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <MovingHeader />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <div className="section-header">
                <h2>Research Paper Topics</h2>
              </div>
              <p className="call-for-paper-paragraph">
                The main topics of the conference have been classified into the
                following four categories:
                <span className="points">
                  <br /> • Material Science Development <br />
                  • Manufacturing Advances
                  <br /> • Thermal Engineering <br />
                </span>
                In addition to the above any other topic relevant to the theme
                of the conference shall be welcomed.
              </p>
            </div>
            <div className="col-12">
              <div
                className="section-header"
                style={{
                  marginTop: "25px",
                }}
              >
                <h2>Participation</h2>
              </div>
              <p className="call-for-paper-paragraph">
                The main objective of RAMMTE-2022 is to provide an opportunity
                for leading academicians, engineers, scientists, researchers,
                industrial professionals and students from around the world to
                network and have scientific discussions on the latest
                developments in the fields of Mechanical engineering. It shall
                provide a platform for communication among them on a wide
                variety of scientific areas with a common interest in nurturing
                the recent advances in Mechanical Engineering. The conference is
                expected to have participation of about 200 papers from 750
                about authors and about 500 delegates are expected to attend the
                conference. We plan to hold two plenary sessions and 15 (5×3)
                parallel technical paper/poster presentation sessions.
                Certificates shall be distributed at the end of each session.
                About 50 specially invited speakers/delegates shall also take
                part in the conference. On the first day evening there shall be
                a cultural night followed by the conference dinner. There shall
                be a special session for the undergraduate students also, which
                shall offer an opportunity to the budding engineers/innovators
                to showcase their talent.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table
                className="w-100 mb-5 register-table"
                style={{
                  marginTop: "20px",
                }}
              >
                <tr style={{ color: "black" }}>
                  <th>Categories</th>

                  <th>Registration Fees</th>
                </tr>
                <tr>
                  <td>(A) Practitioner/Industrialists</td>

                  <td>INR 12,000/-</td>
                </tr>
                <tr>
                  <td>(B) Academician</td>

                  <td>INR 10,000/-</td>
                </tr>
                <tr>
                  <td>(C) Student</td>

                  <td>INR 8000/-</td>
                </tr>
                <tr>
                  <td>(D) Co-Author/Attendees</td>

                  <td>INR 3000/-</td>
                </tr>
                <tr>
                  <td>(E) International Delegates</td>

                  <td>USD 200.00</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="section-header">
        <h2>IMPORTANT DATES</h2>
      </div>

      <div className="event-container">
        <h3 className="year">2022</h3>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">31</div>
              <div className="month">March</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">LAST DATE for full Length Papers</h3>
            <div className="event-description">
              Submission Deadlines for Full Length Papers At max of 10 pages
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
