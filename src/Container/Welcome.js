import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div className="container d-flex">
        <div className="col col-sm-6 col-lg-8 d-flex flex-column justify-content-center">
          <h1
            className="my-0"
            style={{
              lineHeight: "56px",
              fontSize: "48px",
              color: "#00FFA3",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            好AI實驗室，讓你愛上AI
          </h1>
          <p className="my-4">
            ContentalotofcontentContentalotofcontentContentalotofcontentContentalotofcontent
            Contentalotofcontent Contentalotofcontent Contentalotofcontent
            Contentalotofcontent Contentalotofcontent Contentalotofcontent
            Contentalotofcontent Contentalotofcontent Contentalotofcontent
            Contentalotofcontent
          </p>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-lg"
              style={{
                borderRradius: "80px",
                border: "solid 1.25px #50eaff",
                color: "#50eaff"
              }}
            >
              進入教學
            </button>
            <button
              className="btn btn-lg ml-5"
              style={{
                borderRradius: "80px",
                border: "solid 1.25px #50eaff",
                color: "#50eaff"
              }}
            >
              進入訓練
            </button>
          </div>
        </div>
        <div className="col col-sm-6 col-lg-4">
          <img
            src="https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png"
            style={{ width: "500px", height: "500px" }}
          ></img>
        </div>
      </div>
    );
  }
}

export default Welcome;
