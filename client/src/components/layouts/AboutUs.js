import React from "react";

import "../../assets/css/aboutus.css";
import front1 from "../../assets/img/vc.png";
import front2 from "../../assets/img/front2.jpg";
import front3 from "../../assets/img/patron.png";
import front4 from "../../assets/img/front4.jpg";

const AboutUs = () => {
  return (
    <div>
      <section id="venue">
        <div class="section-header">
          <h2>About Us</h2>
        </div>
        <div class="profile-wrapper wow fadeInRight" data-wow-delay="0.3s">
          <h3 class="venue-cap">About Delhi Technological University</h3>
          <p className="text-justify">
            <img
              src={front4}
              style={{
                float: "left",
                width: "30%",
                border: "5px solid #d8e6ea",
                padding: "5px",
                marginRight: "2%",
              }}
              className="right_img"
              alt="front1"
            />
            The institution was set up at historic Kashmere Gate campus as a
            follow up of the Wood and Abott Committee of 1938. The Institute
            came into existence in the year 1941 to cater the needs of Indian
            industries for trained technical manpower with practical experience
            and sound theoretical knowledge. The national diploma awarded by the
            institution was recognized as equivalent to degree level for the
            purposes of employment. In 1952 the college was affiliated with
            University of Delhi and called as Delhi College of Engineering.
          </p>
          <p class="text-justify">
            The department of Architecture later became the School of Planning
            and Architecture, now a Deemed University and Institution of
            National importance. The department of Arts and Sculpture became
            College of Arts and the departments of Chemical Technology and
            Textile Technology were shifted out en-block to mark beginning of
            the IIT Delhi. The erstwhile DCE functioned from its historic
            Kashmere Gate Campus for almost 55 years and has shifted in 1996 to
            its lush green sprawling campus of 164 Acres at Bawana Road,
            adjoining Sector-17, Rohini, Delhi-42.
          </p>
          <p class="text-justify">
            Its shifting to new campus has added the dimension of research and
            caused innovations in plenty, which has received high national and
            international acclaim.
          </p>
        </div>
        <div class="profile-wrapper wow fadeInRight" data-wow-delay="0.3s">
          <h3 class="venue-cap">About Mechanical Engineering Department</h3>
          <p className="text-justify">
            <img
              src={front2}
              style={{
                float: "left",
                width: "30%",
                border: "5px solid #d8e6ea",
                padding: "5px",
                marginRight: "2%",
              }}
              className="right_img"
              alt="front1"
            />
            The Department of Mechanical, Production & Industrial, and
            Automobile Engineering has seen considerable growth since its
            inception in 1941. The department offers UG programme in Mechanical,
            Production & Industrial Engineering and Automobile Engineering and
            PG programmes on Thermal Engineering, Production Engineering. About 200
            research Scholars are presently pursuing their Ph.D. research work.
          </p>
          <p class="text-justify">
            The department possesses modern laboratories equipped with latest
            experimental set-ups, and research facilities for instrumentation,
            experimental stress analysis, strength of materials, fluid
            mechanics, IC engines, Automotive Engineering, Robotics, Heat
            Transfer, Green Energy, Flexible Manufacturing System, Computational
            Fluid Dynamics supported by Software like View-Flex, CAD-CAM, etc.
            The Department has small to medium capacity state of art bio-diesel
            processing units. Different species of non-edible oil such as
            linseed, Thumba, Jatropha, cottonseed, waste cooking oil etc. and
            high FFA oils such as rice bran, Neem, Mahua etc. have been
            successfully converted into bio diesel. We are on the way to make
            DTU campus a zero organic waste campus. Special projects are in
            progress to manage e-waste in DTU campus.DTU has achieved zero
            liquid discharge successfully with the installation of STTP plant.
          </p>
        </div>
        <div class="profile-wrapper wow fadeInRight" data-wow-delay="0.3s">
          <h3 class="venue-cap">Chief Patron</h3>
          <p className="text-justify">
            <img
              src={front1}
              style={{
                float: "left",
                width: "30%",
                border: "5px solid #d8e6ea",
                padding: "5px",
                marginRight: "2%",
              }}
              className="right_img"
              alt="front1"
            />
            Prof. Yogesh Singh is the third Vice Chancellor of Delhi
            Technological University. He is a member of National Assessment and
            Accreditation Council (NAAC). He is also an independent director of
            GSPL. He has worked as Chairman, Central Regional Committee, AICTE,
            Bhopal. He has been the fifth Director of Netaji Subhas Institute
            of Technology, Delhi (December 31, 2014 to July 24, 2017) and
            sixteenth Vice Chancellor of Maharaja Sayajirao University of
            Baroda, Gujarat (July 07, 2011 to December 29, 2014). Government of
            Gujarat had given him the second term of Vice Chancellor, Maharaja
            Sayajirao University of Baroda, which he continued upto December 29,
            2014.
          </p>
        </div>

        <div class="profile-wrapper wow fadeInRight" data-wow-delay="0.3s">
          <h3 class="venue-cap">Patron</h3>
          <p className="text-justify">
            <img
              src={front3}
              style={{
                float: "left",
                width: "30%",
                border: "5px solid #d8e6ea",
                padding: "5px",
                marginRight: "2%",
                height: "250px",
              }}
              className="right_img"
              alt="front1"
            />
            Prof. Yogesh Singh is the third Vice Chancellor of Delhi
            Technological University. He is a member of National Assessment and
            Accreditation Council (NAAC). He is also an independent director of
            GSPL. He has worked as Chairman, Central Regional Committee, AICTE,
            Bhopal. : He has been the fifth Director of Netaji Subhas Institute
            of Technology, Delhi (December 31, 2014 to July 24, 2017) and
            sixteenth Vice Chancellor of Maharaja Sayajirao University of
            Baroda, Gujarat (July 07, 2011 to December 29, 2014). Government of
            Gujarat had given him the second term of Vice Chancellor, Maharaja
            Sayajirao University of Baroda, which he continued upto December 29,
            2014.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
