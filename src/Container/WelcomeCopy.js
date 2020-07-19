import React, { Component } from "react";

class WelcomeCopy extends Component {
  render() {
    console.log();
    return (
      <React.Fragment>
      <div className="container d-flex expand-full">
        <div className="col col-sm-6 col-lg-8 d-flex flex-column justify-content-center">
          <h1 className="my-0 main-title">HowAI實驗室<br/>讓你愛上AI</h1>
          <p className="my-4">
            歡迎來到好AI實驗室！<br/>
            ，<br/>即可獲得操作人工智慧模型的體驗！
          </p>
          <div className="d-flex align-items-center">
            <a href="/SignUp">
              <button className="btn btn-lg btn-main">註冊</button>
            </a>
            <a href="/Login"><button className="btn btn-lg ml-5 btn-main">登入</button></a>
          </div>
        </div>
        <div className="col col-sm-6 col-lg-4 mt-5">
        
        </div>
        
      </div>

      <img
      className="mt-5"
      src="/images/home.png"
      style={{ width: "500px", height: "500px" }}
      id='home-img'
    ></img>
      </React.Fragment>

    );
  }
}

export default WelcomeCopy;
