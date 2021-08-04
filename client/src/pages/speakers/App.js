import React from "react";

import Navbar from "../../components/layouts/Navbar";
import MovingHeader from "../../components/layouts/MovingHeader";
import speaker1 from "../../assets/img/speakers/speaker1.jpg";
import speaker2 from "../../assets/img/speakers/speaker2.jpg";
import speaker3 from "../../assets/img/speakers/speaker3.png";
import speaker4 from "../../assets/img/speakers/speaker4.png";
import speaker5 from "../../assets/img/speakers/speaker5.png";
import speaker6 from "../../assets/img/speakers/speaker6.png";
import speaker7 from "../../assets/img/speakers/speaker7.png";
import speaker8 from "../../assets/img/speakers/speaker8.png";
import speaker9 from "../../assets/img/speakers/speaker9.png";
import speaker10 from "../../assets/img/speakers/speaker10.png";
import speaker11 from "../../assets/img/speakers/speaker11.png";
import speaker12 from "../../assets/img/speakers/speaker12.png";
import speaker13 from "../../assets/img/speakers/speaker13.png";
import speaker14 from "../../assets/img/speakers/speaker14.png";
import speaker15 from "../../assets/img/speakers/speaker15.jpeg";
import Footer from "../../components/layouts/Footer";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <MovingHeader />
      <div className="container-fluid cf pt-5 pb-5">
        <div className="container con mx-auto col-md-10">
          <div className="header">
            <div className="section-header">
              <h2>Our Speakers</h2>
            </div>
          </div>
          <div className="row justify-content-center pb-5">
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker3} alt="" className="img-fluid" />{" "}
                  </div>
                  <div className="card-title mt-4"> Prof. Yogi Goswami</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Working as: Director, Clean Energy Research Center,
                        College of Engineering, University of South Florida,
                        United States of America.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker1} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4">Prof. H. C. Lim</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Working as: Professor School of Mechanical Engineering
                        Pusan National University, San30, Janggeon-dong,
                        Geumjeong-gu Busan, 609-735. South Korea.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker4} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4"> Dr. Shyam S. Pandey</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Working as: Associate Professor, Division of Green
                        Electronics, Graduate School of Life Science and Systems
                        Engineering, Kyushu Institute of Technology, Japan.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker5} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4"> Dr. Ashish Shukla</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Working as: Assistant Professor (Research), Centre for
                        Research in the Built and Natural Environment, Coventry
                        University, United Kingdom
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker6} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4"> Dr. Nitin Upadhye</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Working as: Associate Professor, College of Business,
                        University of Modern Sciences, United Arab Emirates
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker15} alt="" className="img-fluid" />{" "}
                  </div>
                  <div className="card-title mt-4"> Dr. Ashok Kumar</div>

                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Working as: Director at Bureau of Energy Efficiency
                        (BEE), Ministry of Power, and Government of India. He is
                        primarily involved in the implementation of National
                        Mission on Enhanced Energy Efficiency.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker7} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4"> Dr. Afzal Husain</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Working as: Assistant Professor, Department of
                        Mechanical Engineering College of Engineering, Sultan
                        Qaboos University, Sultanate of Oman
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker14} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4">
                    {" "}
                    Mr Sanjeev Kumar Varshney
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Adviser & Head, International Bilateral Cooperation
                        Division Department of Science & Technology
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker8} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4">
                    {" "}
                    Prof. Abd Elnaby Kabeel
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Tanta University, Egypt
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker9} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4"> Mr. Dhiraj Shah</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        CAE at Ambigai Consultancy Services GmbH, Waiblingen,
                        Baden-Württemberg, Germany
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker10} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4"> Dr. Amrik Singh</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        PACCAR AUSTRALIA
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker11} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4"> DR. SHYAM S. PANDEY</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        (Associate Professor) Division of the Green Electronics,
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker12} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4">Dr.Nadim Reza Khandaker</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Associate Professor, North South University Bashundhara,
                        Dhaka-1229, Bangladesh.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker13} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4"> Prof. Haeng Muk Cho</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Professor, Kongju National University, South Korea
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
