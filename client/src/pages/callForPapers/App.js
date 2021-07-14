import React from "react";

import Navbar from "../../components/layouts/Navbar";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="section-header">
          <h2>Call For Paper</h2>
        </div>
        <div className="row">
          <div className="col-12">
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
              & contributors during the conference. Papers must be submitted
              strictly in the RAME-2020 template.
            </p>
          </div>
          <div className="col-12">
            <div className="section-header">
              <h2>Research Paper Topics</h2>
            </div>
            <p className="call-for-paper-paragraph">
              The main topics of the conference have been classified into the
              following four categories:
              <br /> • Thermal Engineering <br />• Energy Science and
              Engineering
              <br /> • Product Design and Development <br />• Industrial and
              Production Engineering <br />
              In addition to the above any other topic relevant to the theme of
              the conference shall be welcomed.
            </p>
          </div>
          <div className="col-12">
            <div className="section-header">
              <h2>Participation</h2>
            </div>
            <p className="call-for-paper-paragraph">
              The main objective of RAME-2022 is to provide an opportunity for
              leading academicians, engineers, scientists, researchers,
              industrial professionals and students from around the world to
              network and have scientific discussions on the latest developments
              in the fields of Mechanical engineering. It shall provide a
              platform for communication among them on a wide variety of
              scientific areas with a common interest in nurturing the recent
              advances in Mechanical Engineering. The conference is expected to
              have participation of about 200 papers from 750 about authors and
              about 500 delegates are expected to attend the conference. We plan
              to hold two plenary sessions and 15 (5×3) parallel technical
              paper/poster presentation sessions. Certificates shall be
              distributed at the end of each session. About 50 specially invited
              speakers/delegates shall also take part in the conference. On the
              first day evening there shall be a cultural night followed by the
              conference dinner. There shall be a special session for the
              undergraduate students also, which shall offer an opportunity to
              the budding engineers/innovators to showcase their talent.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table
              className="w-100 mb-5 register-table"
             
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
  );
};

export default App;
