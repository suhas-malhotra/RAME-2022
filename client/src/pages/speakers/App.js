import React from "react";

import Navbar from "../../components/layouts/Navbar";
import MovingHeader from "../../components/layouts/MovingHeader";
import speaker1 from "../../assets/img/speakers/speaker1.jpg";
import speaker2 from "../../assets/img/speakers/speaker2.jpg";

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
            <div className="card col-md-3 ">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker1} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4">
                    {" "}
                    Prof. Hee Chang LIM
                    <br />
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        <p className="speaker-text">
                          Prof. Hee Chang LIM obtained his Bachelor of Science
                          in Mechanical Engineering from the Department of
                          Mechanical Engineering of Pusan National University.
                          The MSc and Ph.D. degrees in Thermo-Fluid Mechanics
                          followed this from the Department of Mechanical
                          Engineering of Pohang University of Science and
                          Technology (POSTECH).
                        </p>
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker2} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4">
                    {" "}
                    K.A. Subramanian
                    <br />
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        <p className="speaker-text">
                          Dr. K.A. Subramanian is working as a Professor in
                          Centre for Energy Studies, Indian Institute of
                          Technology Delhi. His main research area includes
                          alternative fueled internal combustion engines. Prior
                          to joining to this Institute, he worked as a Scientist
                          in Indian Institute of Petroleum after he received his
                          Doctoral degree in Internal Combustion Engines
                          (Mechanical Engineering) from Indian Institute of
                          Technology Madras.
                        </p>
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                      alt=""
                    />{" "}
                  </div>
                  <div className="card-title mt-4">
                    {" "}
                    Angelina Frederic
                    <br /> <small>Head of marketing at K mart</small>{" "}
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        I expected anything less than perfect for the team of
                        experts. They are the best team ever!{" "}
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card col-md-3 mt-100">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                      alt=""
                    />{" "}
                  </div>
                  <div className="card-title mt-4">
                    {" "}
                    Angelina Frederic
                    <br /> <small>Head of marketing at K mart</small>{" "}
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        I expected anything less than perfect for the team of
                        experts. They are the best team ever!{" "}
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-100">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583319/AAA/3.jpg"
                      alt=""
                    />{" "}
                  </div>
                  <div className="card-title mt-4">
                    {" "}
                    Noel Flantier
                    <br /> <small>CEO of Redbull</small>{" "}
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        I really enjoyed working with them, they are Group of
                        Professionals and they know what they're Doing{" "}
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-100">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                      alt=""
                    />{" "}
                  </div>
                  <div className="card-title mt-4">
                    {" "}
                    David Gregory
                    <br /> <small>Resident Dj at ibdc</small>{" "}
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        I always wanted cool videos of my concerts never knew
                        whom to talk to but they are amazing!{" "}
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
