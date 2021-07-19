/* eslint-disable react/style-prop-object */
import React from "react";

import Navbar from "../../components/layouts/Navbar";
import MovingHeader from "../../components/layouts/MovingHeader";
import Footer from "../../components/layouts/Footer";
import img1 from "../../assets/img/publi1.jpg";
import img2 from "../../assets/img/publi2.jpg";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <MovingHeader />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header">
              <h2 className="mt-4">Publication</h2>
            </div>
            <p className="call-for-paper-paragraph">
              RAME-2022 invites prospective authors to submit a full paper with
              minimum six -ten pages All Submissions will be reviewed and
              evaluated based on originality, technical research and relevance
              to conference themes. RAME-2020 papers have been published in
              Weentech Proceedings in Energy and Lecture Notes in Mechanical
              Engineering, Springer (LNME Scopus Indexed). RAME 2022 papers are
              proposed to be published in Springer LNME and Materials Today
              Proceedings (Scopus Indexed), and some other ESCI, SCI and SCIE
              journals provided the articles conform to our publishing criteria
              and meet quality standards, and certificate of acceptance will be
              provided to the corresponding authors and conference participants
              & contributors during the conference.{" "}
            </p>
          </div>
          <div className="col-12">
            <div className="section-header">
              <h2 className="mt-4">Previous Publication</h2>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <img
              src={img1}
              alt=""
              className="img-fluid"
              style={{ height: "250px" }}
            />
          </div>
          <div className="col-12 col-md-4 mb-4">
            <img
              src={img2}
              alt=""
              className="img-fluid"
              style={{ height: "250px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
