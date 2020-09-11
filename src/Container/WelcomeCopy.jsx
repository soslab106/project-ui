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
              體驗、玩轉  盡在 HowAILab<br />
好AI實驗室 讓你愛上AI<br />
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

        <div className='container d-flex flex-column mb-5 my-5 py-5'>
          <div className='d-flex justify-content-around'>
            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='執行模型'
              iconsubtitle={<div>
                想知道當代模型具有那些功能，<br />
              並且有哪些結果嗎，<br />
              快來體驗看看吧！</div>} />

            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='客製化模型'
              iconsubtitle={<div>
                當你對人工智慧技術知識<br />
                和專有名詞感到頭痛的時候，<br />
                快探索網頁來緩解你的痛</div>} />

            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='人工智慧'
              iconsubtitle={<div>
                還在苦惱訓練模型困難重<br />
                重嗎？只要準備好資料集<br />
                就可以輕鬆訓練自己的模型！</div>} />

            <HomePageIcon
              imgpath='/logo192.png'
              icontitle='產業應用新知'
              iconsubtitle={<div>
                想知道人工智慧的入門知識<br />
和各種有趣的應用場域和新知嗎 ？</div>} />
          </div>
          <div className=' border border-primary w-100 text-center p-5 my-3 mt-5' style={{ width: "300px", height: "200px" }}>


            <h3 class="" >
            進入功能選單體驗我們提供的各種AI功能，了解人工智慧不同面向！
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
