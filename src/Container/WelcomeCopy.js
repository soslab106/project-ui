import React, { Component } from "react";
import HomePageIcon from '../Components/HomePageIcon'

class WelcomeCopy extends Component {
  render() {
    console.log();
    return (
      <React.Fragment>
        <div className="container d-flex expand-full mb-5">
          <div className="col col-sm-6 col-lg-8 d-flex flex-column justify-content-center expand-full">
            <h1 className="my-0 main-title">HowAI實驗室<br />讓你愛上AI</h1>
            <p className="my-4">
              歡迎來到好AI實驗室！<br />
            ，<br />即可獲得操作人工智慧模型的體驗！
          </p>
            <div className="d-flex align-items-center">
              <a href="/SignUpnew">
                <button className="btn btn-lg btn-main">註冊</button>
              </a>
              <a href="/signin"><button className="btn btn-lg ml-5 btn-main">登入</button></a>
            </div>
          </div>
        </div>

        <hr color='#50eaff' className='m-5' />

        <div className='container d-flex flex-column mb-5 my-5 py-5'>
          <div className='d-flex justify-content-around'>
            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='Testing'
              iconsubtitle='按照指示使用即可使用模型' />

            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='TL'
              iconsubtitle='根據資料訓練屬於你的模型' />

            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='人工智慧'
              iconsubtitle='人工智慧知識與產業應用' />

            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='個人資料'
              iconsubtitle='記錄你的人工智慧進度' />
          </div>
          <div className=' border border-primary w-100 text-center p-5 my-3 mt-5' style={{ width: "300px", height: "200px" }}>


            <h3 class="" >
              跟著HOWA的~~開始我們的OOX之旅吧
                </h3>
            <a href="/Menu">
              <button className="btn btn-lg btn-main mt-3">網站功能選單</button>
            </a>
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
