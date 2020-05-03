import React, { Component } from "react";
import TextAndImg from "../Components/TextAndImg";
import FullWidthBlock from "../Components/FullWidthBlock";
import ThumbNail from "../Components/ThumbNail";

class Intro extends Component {
  state = {
    intro_1: [
      "近年來，人工智慧的風潮崛起，許多產業界都有不同的成果出現。各種網站、新聞都可以看到人工智慧又做了什麼創舉，像是2016年AlphaGo擊敗韓國圍棋高手李世乭、特斯拉研發自動駕駛系統等等。但是你知道，人工智慧底下其實還包含「機器學習」和「深度學習」嗎?",
    ],
    intro_2: [
      "事實上，深度學習是機器學習的一部份，而機器學習又是人工智慧的一部份。而三者出現的時間間隔約30年，至於深度學習直到2010年代才興起，主要是因，深度學習需要足夠數量的資料以及強大的電腦運算速度才能完成。",
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container" style={{marginBottom: '200px'}}>
          <div className="d-flex align-items-center my-4">
            <div className="col-5">
              <h1 className="title"> 人工智慧 </h1>
              <h3 className="title"> Artificial Intelligence </h3>
              <div className="my-5"> {this.state.intro_1} </div>
            </div>
            <div className="col-7" overflow="hidden">
              <img alt=" " src="/images/intro_1.png" />
            </div>
          </div>
          <TextAndImg
            my="5"
            textWidth="5"
            imgWidth="1200"
            textList={this.state.intro_2}
            imgPath="/images/intro_2.png"
            imgPos="left"
          />
        </div>
        <FullWidthBlock
          my="5"
          className="d-flex flex-column justify-content-center align-items-center selectFunc"
        >
          <div className="container d-flex flex-column align-items-center justify-content-center py-3">
            <h1 className="title">功能選擇</h1>
            <div>
              <a href="/cnn">
                <button className="btn btn-model mt-4 mx-2">
                  圖像處理 CNN
                </button>
              </a>
              <button className="btn btn-model mt-4 mx-2">時序資料 RNN</button>
              <button className="btn btn-model mt-4 mx-2">影像轉換 GAN</button>
              <button className="btn btn-model mt-4 mx-2">
                模型攻擊 Adversarial
              </button>
            </div>
          </div>
        </FullWidthBlock>
        <div className="my-5" style={{paddingTop:'150px !important'}}>
          <h1 className="text-center title"> 深度學習 </h1>
          <h3 className="text-center title"> Deep Learning </h3>
          <div className="text-center my-5" id="dl-intro">
            人工智慧有了近年來的蓬勃發展， 深度學習功不可沒。
            深度學習經由模仿人類大腦自我學習的類神經網路得出預測結果。
            深度學習是目前最被廣泛使用的AI技術之一。 常見的應用如下
          </div>
          <div className="d-flex mx-5 justify-content-center">
            <ThumbNail
              title="影像辨識"
              imgPath="/images/intro_3.png"
              content="Facebook 將使用者自動標記在照片中的「人臉辨識」、停車場的「車牌辨識」、「自動駕駛車」"
            />

            <ThumbNail
              title="自然語言處理"
              imgPath="/images/intro_4.jpg"
              content="自然語言處理就是讓電腦能理解人類語言，分析詞意以及詞句間的關係，常應用的方面像是機器翻譯、詐騙郵件偵測、google的搜尋建議更正，或是分析社群媒體、娛樂產業、網路活動輿情分析等等。"
            />

            <ThumbNail
              title="語音辨識"
              imgPath="/images/intro_5.jpg"
              content="語音辨識技術省下我們常要動手的麻煩，最典型的應用像是手機語音助理(Siri)可協助我們撥號、行程安排、問答等等。"
            />
            <ThumbNail
              title="醫療照護"
              imgPath="/images/intro_6.jpg"
              content="人工智慧也常用在醫療照護的方面，協助醫生進行醫療數據分析、疾病診斷、病患數據即時監控、疾病諮詢等等。"
            />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <a href="/nn-intro">
              <button className="btn btn-main mt-4"> 神經網路概述 </button>
            </a>
            <a href="/">
              <button
                className="btn btn-previous mt-5"
                style={{ width: "100px" }}
              >
                回到首頁
              </button>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Intro;
