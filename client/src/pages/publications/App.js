/* eslint-disable react/style-prop-object */
import React from "react";

import Navbar from "../../components/layouts/Navbar";
import MovingHeader from "../../components/layouts/MovingHeader";
import Footer from "../../components/layouts/Footer";
import img1 from "../../assets/img/publi1.jpg";
import img2 from "../../assets/img/publi2.jpg";
import img3 from "../../assets/img/2016.jpeg";

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
              RAMMTE-2022 invites prospective authors to submit a full paper
              with minimum six -ten pages All Submissions will be reviewed and
              evaluated based on originality, technical research and relevance
              to conference themes. RAME-2020 papers have been published in
              Weentech Proceedings in Energy and Lecture Notes in Mechanical
              Engineering, Springer (LNME Scopus Indexed). RAMMTE 2022 papers
              are proposed to be published in Springer LNME and Materials Today
              Proceedings (Scopus Indexed), and some other ESCI, SCI and SCIE
              journals provided the articles conform to our publishing criteria
              and meet quality standards, and certificate of acceptance will be
              provided to the corresponding authors and conference participants
              & contributors during the conference.
              <br />
              *Select papers from the conference will be published by Springer
              as a proceedings book volume. Springer will conduct quality checks
              on the accepted papers and only papers that pass these checks will
              be published. <br />
              *Springer Nature does not charge any money for publication of
              Non-Open Access content. Abstracts/extended abstracts and short
              papers (less than 4 pages) are not considered for publication.
              <br />
              Selected high quality research papers related to energy research
              shall be considered for the publication in the Journal "Advances
              in Energy Research!, An international Journal" and "Web of Science
              ESCI indexed journal"{" "}
              <a href=" http://www.techno-press.org/?journal=eri">
                Website link{" "}
              </a>
            </p>
            <p>
              <a href="https://easychair.org/conferences/?conf=rame2022">
                <strong>You can submit your paper here</strong>
              </a>
              <br />
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
          <div className="col-12 col-md-4 mb-4">
            <img
              src={img3}
              alt=""
              className="img-fluid"
              style={{ height: "250px", width: "300px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
