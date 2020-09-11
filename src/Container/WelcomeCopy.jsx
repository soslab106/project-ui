import React, { Component } from "react";
import "../CSS/Welcome.css";
import HomePageIcon from "../Components/HomePageIcon";

class WelcomeCopy extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="welcome">
          <div className="home__canvas">
            <img className="home__image" src="/images/welcome/ID003-ai.png" />
            <div className="home__title">
              <span className="home__first">
                HowAI 實驗室
                <br />
                讓你愛上AI
              </span>
              <span className="home__second">
                體驗、玩轉 盡在HowAI Lab <br />
                好AI實驗室 讓你愛上AI
              </span>
            </div>
          </div>
          <div className="home__intro">
            <span className="home__introfirst">主要功能介紹</span>
            <span className="home__introsecond">
              進入功能選單體驗我們提供的各種AI功能
              <br />
              了解人工智慧不同面向！
            </span>
          </div>
          <div className="home__functions">
            <HomePageIcon
              imgpath="/images/welcome/ID002-tale.png"
              icontitle="知識補充站"
              iconsubtitle="當你對人工智慧技術知識和專有名詞感到頭痛的時候，快探索網頁來緩解你的痛"
            />
            <HomePageIcon
              imgpath="/images/welcome/ID003-research.png"
              icontitle="執行模型"
              iconsubtitle="想知道當代模型具有那些功能，並且有哪些結果嗎，快來體驗看看吧！"
            />
            <HomePageIcon
              imgpath="/images/welcome/ID001-idea.png"
              icontitle="客製化模型"
              iconsubtitle="還在苦惱訓練模型困難重重嗎？只要準備好資料集，就可以輕鬆訓練自己的模型！"
            />
            <HomePageIcon
              imgpath="/images/welcome/ID004-newspaper.png"
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
