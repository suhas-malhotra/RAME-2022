import React from "react";

import Navbar from "../../components/layouts/Navbar";
import MovingHeader from "../../components/layouts/MovingHeader";

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
    </div>
  );
};

export default App;
