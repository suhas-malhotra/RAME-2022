import React from "react";

import Navbar from "../../components/layouts/Navbar";
import MovingHeader from "../../components/layouts/MovingHeader";
import speaker1 from "../../assets/img/speakers/speaker1.jpg";
import speaker2 from "../../assets/img/speakers/portugal.png";

import speaker3 from "../../assets/img/speakers/speaker3.png";
import speaker4 from "../../assets/img/speakers/speaker4.png";
import speaker5 from "../../assets/img/speakers/speaker5.png";
import speaker6 from "../../assets/img/speakers/speaker6.png";
import speaker7 from "../../assets/img/speakers/speaker7.png";
import speaker8 from "../../assets/img/speakers/speaker8.png";
import speaker9 from "../../assets/img/speakers/speaker9.png";
import speaker10 from "../../assets/img/speakers/speaker10.png";
import speaker20 from "../../assets/img/speakers/speaker20.jpg";
import speaker12 from "../../assets/img/speakers/speaker12.png";
import speaker13 from "../../assets/img/speakers/speaker13.png";
import speaker14 from "../../assets/img/speakers/speaker14.png";
import speaker15 from "../../assets/img/speakers/speaker15.jpeg";
import speaker17 from "../../assets/img/speakers/speaker17.png";
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
                  <div className="card-title mt-4">Prof. Yogi Goswami</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        University of South Florida, United States of America.
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
                    <img src={speaker2} alt="" className="img-fluid" />{" "}
                  </div>
                  <div className="card-title mt-4">
                    Prof. Cristina L.M. Silva
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Universidade Católica Portuguesa, Portugal
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
                        Pusan National University, South Korea.
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
                  <div className="card-title mt-4">Dr. Shyam S. Pandey</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Kyushu Institute of Technology, Japan.
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
                        International Bilateral Cooperation Division Department
                        of Science & Technology
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
                    <img src={speaker20} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4">
                    {" "}
                    Prof. Ahmed M Abdel-Ghany
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        King Saud University, Saudi Arabia.
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
                    <img src={speaker17} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4">
                    {" "}
                    Prof. Branka Gvozdenac Urošević
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Technical Sciences University of Novi Sad ,Serbia
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
                    <img src={speaker12} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4">Dr.Nadim Reza Khandaker</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        North South University Bashundhara, Bangladesh.
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
                        Ambigai Consultancy Services GmbH, Germany
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
                        Sultan Qaboos University, Sultanate of Oman
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
                        PACCAR , Australia
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
                        Coventry University, United Kingdom
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
                        Energy Efficiency (BEE), Ministry of Power, Government
                        of India.
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
