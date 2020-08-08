import React, { Component } from "react";

class Welcome extends Component {
  render() {
    console.log();
    return (
      <React.Fragment>
      <div className="container d-flex expand-full">
        <div className="col col-sm-6 col-lg-8 d-flex flex-column justify-content-center">
          <h1 className="my-0 main-title">HowAI實驗室<br/>讓你愛上AI</h1>
          <p className="my-4">
            歡迎來到好AI實驗室！<br/>
            好AI實驗室為旨在提供作AI模型的教育平台，不須接觸到艱澀難懂的程式碼，<br/>即可獲得操作人工智慧模型的體驗！
          </p>
          <div className="d-flex align-items-center">
            <a href="/intro">
              <button className="btn btn-lg btn-main">進入教學</button>
            </a>
            <a href="/playground-list"><button className="btn btn-lg ml-5 btn-main">模型選單</button></a>
          </div>
        </div>
        <div className="col col-sm-6 col-lg-4 mt-5">
          
        </div>
        
      </div>
      <img
      className="mt-5"
      src="/images/home.svg"
      style={{ width: "500px", height: "500px" }}
      id='home-img'
    ></img>
      </React.Fragment>

    );
  }
}

export default Welcome;
