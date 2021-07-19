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
                  <br /> • Thermal Engineering <br />• Energy Science and
                  Engineering
                  <br /> • Product Design and Development <br />• Industrial and
                  Production Engineering <br />
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
                The main objective of RAME-2022 is to provide an opportunity for
                leading academicians, engineers, scientists, researchers,
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
                  <th>International</th>
                  <th>Indian</th>
                </tr>
                <tr>
                  <td>(A) Practitioner/Industrialists</td>
                  <td>USD 150/-</td>
                  <td>*INR 10,000/-</td>
                </tr>
                <tr>
                  <td>(B) Academician</td>
                  <td>USD 100/-</td>
                  <td>*INR 6000/-</td>
                </tr>
                <tr>
                  <td>(C) Student/Co-Authors/Attendees</td>
                  <td>USD 75/-</td>
                  <td>*INR 4000/-</td>
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
        <h3 className="year">2021</h3>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">31</div>
              <div className="month">December</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Submission Deadline for fu</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:00 am
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">22</div>
              <div className="month"> Jul</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Lorem, ipsum dolor.</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:45 am
            </div>
          </div>
        </div>

        <h3 className="year">2020</h3>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">8</div>
              <div className="month">Jan</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Lorem, ipsum dolor.</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:00 am
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">9</div>
              <div className="month">Mar</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Lorem, ipsum dolor.</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:30 am
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">4</div>
              <div className="month">Apr</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Lorem, ipsum dolor.</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:00 am
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">8</div>
              <div className="month">Jun</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Lorem, ipsum dolor.</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:00 am
            </div>
          </div>
        </div>
     
    </div>
      <Footer />
    </div>
  );
};

export default App;
