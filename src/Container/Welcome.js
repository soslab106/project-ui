import React, { Component } from "react";

class Welcome extends Component {
  render() {
    console.log();
    return (
      <div className="container d-flex expand-full">
        <div className="col col-sm-6 col-lg-8 d-flex flex-column justify-content-center">
          <h1 className="my-0 main-title">好AI實驗室，讓你愛上AI</h1>
          <p className="my-4">
            ContentalotofcontentContentalotofcontentContentalotofcontentContentalotofcontent
            Contentalotofcontent Contentalotofcontent Contentalotofcontent
            Contentalotofcontent Contentalotofcontent Contentalotofcontent
            Contentalotofcontent Contentalotofcontent Contentalotofcontent
            Contentalotofcontent
          </p>
          <div className="d-flex align-items-center">
            <a href="/intro">
              <button className="btn btn-lg btn-main">進入教學</button>
            </a>
            <button className="btn btn-lg ml-5 btn-main">進入訓練</button>
          </div>
        </div>
        <div className="col col-sm-6 col-lg-4 mt-5">
          <img
            className="mt-5"
            src="https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png"
            style={{ width: "500px", height: "500px" }}
          ></img>
        </div>
      </div>
    );
  }
}

export default Welcome;
