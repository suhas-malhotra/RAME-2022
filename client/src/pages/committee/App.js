import React from "react";
import "./App.css";

import Navbar from "../../components/layouts/Navbar";
import MovingHeader from "../../components/layouts/MovingHeader";
import img1 from "../../assets/img/vc.png";
import img13 from "../../assets/img/vcc.png";
import img2 from "../../assets/img/patron.jpg";
import img12 from "../../assets/img/jitender.jpeg";
import img4 from "../../assets/img/amit.jpeg";
import img5 from "../../assets/img/vijay.jpeg";
import img6 from "../../assets/img/anil.jpeg";
import img7 from "../../assets/img/girish.png";
import img8 from "../../assets/img/zuniad.JPG";
import img9 from "../../assets/img/manjunath.png";
import img10 from "../../assets/img/ansari.png";
import img11 from "../../assets/img/yuvraj.png";
import Footer from "../../components/layouts/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <MovingHeader />
      <div className="container-fluid cf pt-5 pb-5">
        <div class="container con pb-5">
          <div class="row">
            <div class="col-12 text-center">
              <div class="section-header">
                <h2 class="title mt-5">Our Committee</h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6 col-12 ">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img1}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "277.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Prof. Jai Prakash Saini</h4>
                    <small class="text-muted">Chief Patron</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 ">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img13}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "277.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Prof. Samsher</h4>
                    <small class="text-muted">Chief Patron</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img2}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "277.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Prof. S. K. Garg</h4>
                    <small class="text-muted">Patron</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 ">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img4}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "277.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Prof. Amit Pal</h4>
                    <small class="text-muted">Conference Chair</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 ">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img5}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "297.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Prof. Vijay Gautam</h4>
                    <small class="text-muted">Conference Co-Chair</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img6}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "277.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Dr.Anil Kumar</h4>
                    <small class="text-muted">Convener</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img7}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "277.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Dr. Girish Kumar</h4>
                    <small class="text-muted">Co-Convener</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mt-4">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img12}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "277.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Dr. Jitendra Bhaskar</h4>
                    <small class="text-muted">Co-Convener</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mt-4">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img8}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "277.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Dr. M. Zuniad</h4>
                    <small class="text-muted">Organizing Secretary</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mt-4">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img9}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "277.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Dr. K Manjunath</h4>
                    <small class="text-muted">Joint Organizing Secretary</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mt-4">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img10}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "277.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Dr. N. A. Ansari</h4>
                    <small class="text-muted">Joint Organizing Secretary</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mt-4">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src={img11}
                      class="img-fluid rounded"
                      alt=""
                      style={{ height: "277.56px" }}
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Dr. N. Yuvrajy</h4>
                    <small class="text-muted">Joint Organizing Secretary</small>
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
