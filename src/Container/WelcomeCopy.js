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
              <a href="/SignUp">
                <button className="btn btn-lg btn-main">註冊</button>
              </a>
              <a href="/signin"><button className="btn btn-lg ml-5 btn-main">登入</button></a>
            </div>
          </div>
        </div>

        <hr color='#50eaff' className='m-5' />

        <div className='container d-flex flex-column my-5 py-5'>
          <div className='d-flex justify-content-around'>
            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='Title'
              iconsubtitle='Subtitle' />

            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='Title'
              iconsubtitle='Subtitle' />

            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='Title'
              iconsubtitle='Subtitle' />

            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='Title'
              iconsubtitle='Subtitle' />
          </div>
          <div className=' border border-primary w-100 text-center p-5 my-3' style={{ width: "300px", height: "200px" }}>


            <h3 class="" >
              跟著HOWA的~~開始我們的OOX之旅吧
                </h3>
            <a href="/">
              <button className="btn btn-lg btn-main mt-3">網站功能選單</button>
            </a>
            <a href="/SignUp">
              <button className="btn btn-lg btn-main mt-3">人工智慧教學</button>
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
