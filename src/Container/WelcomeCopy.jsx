import React, { Component } from "react";
import HomePageIcon from "../Components/HomePageIcon";

class WelcomeCopy extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="expand-full d-flex justify-content-around flex-column">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="container h-100 d-flex justify-content-around align-items-center">
              <div className="">
                <img className="" src="/images/welcome/home.png" width="560" />
              </div>

              <div className="">
                <div className="main-title">
                  HowAI 實驗室
                  <br />
                  讓你愛上AI
                </div>
                <div className="mt-3">
                  體驗、玩轉 盡在HowAI Lab <br />
                  好AI實驗室 讓你愛上AI
                </div>
              </div>
            </div>

            <div className="mt-5">
              <img src="/images/arrow.png" width="55" />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="secondary-title">主要功能介紹</div>
          <div className="text-center content-color mt-3">
            進入功能選單體驗我們提供的各種AI功能
            <br />
            了解人工智慧不同面向！
          </div>
          <div className="d-flex justify-content-between align-items-center mt-5">
            <HomePageIcon
              imgpath="/images/welcome/books.png"
              icontitle="知識補充站"
              iconsubtitle="當你對人工智慧技術知識和專有名詞感到頭痛的時候，快探索網頁來緩解你的痛"
            />
            <HomePageIcon
              imgpath="/images/welcome/execute.png"
              icontitle="執行模型"
              iconsubtitle="想知道當代模型具有那些功能，並且有哪些結果嗎，快來體驗看看吧！"
            />
            <HomePageIcon
              imgpath="/images/welcome/custom.png"
              icontitle="客製化模型"
              iconsubtitle="還在苦惱訓練模型困難重重嗎？只要準備好資料集，就可以輕鬆訓練自己的模型！"
            />
            <HomePageIcon
              imgpath="/images/welcome/forum.png"
              icontitle="產業應用新知"
              iconsubtitle="想知道人工智慧的入門知識和各種有趣的應用場域和新知嗎？"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WelcomeCopy;
