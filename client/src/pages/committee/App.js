import React from "react";
import "./App.css";

import Navbar from "../../components/layouts/Navbar";
import MovingHeader from "../../components/layouts/MovingHeader";
import img1 from "../../assets/img/vc.png";
import img2 from "../../assets/img/patron.png";
import img3 from "../../assets/img/advisory.jpeg";
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
                    <img src={img1} class="img-fluid rounded" alt=""  style={{height:"277.56px"}}/>
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Prof. Yogesh Singh</h4>
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
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      class="img-fluid rounded"
                      alt=""
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
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      class="img-fluid rounded"
                      alt=""
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
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      class="img-fluid rounded"
                      alt=""
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
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      class="img-fluid rounded"
                      alt=""
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
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      class="img-fluid rounded"
                      alt=""
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
                      src={img3}
                      class="img-fluid rounded"
                      alt=""
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Mr Sanjeev Kumar Varshney</h4>
                    <small class="text-muted">Advisory Committe</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mt-4">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      class="img-fluid rounded"
                      alt=""
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
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      class="img-fluid rounded"
                      alt=""
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Mr Sanjeev Kumar Varshney</h4>
                    <small class="text-muted">Dr. N. A. Ansari</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mt-4">
              <div class="mt-4 pt-2">
                <div class="team position-relative d-block text-center">
                  <div class="image position-relative d-block overflow-hidden">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      class="img-fluid rounded"
                      alt=""
                    />
                    <div class="overlay rounded bg-dark"></div>
                  </div>
                  <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                    <h4 class="title mb-0">Dr. N. Yuvraj</h4>
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
