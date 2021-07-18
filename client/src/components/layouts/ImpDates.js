import React from "react";
import RevoCalendar from "revo-calendar";
import "../../assets/css/Impdates.css";
import img from "../../assets/img/time.png";
const ImpDates = () => {
  var EVENTS = [
    {
      name: "Amandeep Birthday",
      date: "July/23/2021",
      allday: true,
    },
    {
      name: "Lorem Ipsum",
      date: "July/18/2021",
      allday: true,
    },
  ];

  return (
    <div className="container-fluid cf pt-5 pb-5 ">
      <div
        className="container con pb-5"
        style={{
          width: "80%",
          marginTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-header">
              <h2 className="title mt-5">IMPORTANT DATES</h2>
            </div>
          </div>
        </div>
        <RevoCalendar
          events={EVENTS}
          allowAddEvent={false}
          allowDeleteEvent={false}
        />
      </div>
      <div className="event-container">
        <h3 className="year">2021</h3>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">8</div>
              <div className="month">Apr</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Lorem, ipsum dolor.</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:00 am
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">22</div>
              <div className="month"> Jul</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Lorem, ipsum dolor.</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:45 am
            </div>
          </div>
        </div>

        <h3 className="year">2020</h3>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">8</div>
              <div className="month">Jan</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Lorem, ipsum dolor.</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:00 am
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">9</div>
              <div className="month">Mar</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Lorem, ipsum dolor.</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:30 am
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">4</div>
              <div className="month">Apr</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Lorem, ipsum dolor.</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:00 am
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">8</div>
              <div className="month">Jun</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Lorem, ipsum dolor.</h3>

            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="event-timing">
              <img src={img} alt="" /> 10:00 am
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpDates;
