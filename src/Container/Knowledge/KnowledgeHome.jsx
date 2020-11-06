import React, { Component } from "react";
import HomeInstances from "../../Components/HomeInstances";
import ArticleCard from "../../Components/ArticleCard";
import { Tab, Tabs } from "react-bootstrap";
import NewsTab from "../../Components/knowledge/NewsTab";
import NewsTheme from "../../Components/knowledge/NewsTheme";

class KnowledgeHome extends Component {
  state = {
    currentNews: "財經",
    teachings: {
      basic: [
        {
          title: "人工智慧概論",
          desc: (
            <div>
              簡述人工智慧的定義、深度學習的區別等等
              <br />
              專有名詞解釋及定義釐清
            </div>
          ),
          link: "/intro",
        },
        {
          title: "類神經網路",
          desc: <div>深度學習的基礎原理、來源等等的背景知識介紹</div>,
          link: "/nn-intro",
        },
        {
          title: "電腦視覺",
          desc: (
            <div>
              介紹電腦視覺的基礎知識，以及如何將人工智慧、深度學習應用在此領域中
            </div>
          ),
          link: "",
        },
        {
          title: "卷積神經網路",
          desc: (
            <div>
              介紹可應用於電腦視覺的基礎深度學習模型、及其相關簡易運作原理
            </div>
          ),
          link: "https://hackmd.io/3A_SaNrqTuGGNnQlVLEONQ",
        },
        {
          title: "自然語言處理",
          desc: (
            <div>
              介紹自然語言定義、相關處理，與可分析之方法、深度學習模型等等
            </div>
          ),
          link: "",
        },
        {
          title: "遞迴神經網路",
          desc: (
            <div>
              介紹可應用於自然語言處理的基礎深度學習模型，以及基礎運作原理
            </div>
          ),
          link: "",
        },
      ],
      model: [
        {
          title: "圖像分類 VGG16",
          desc:
            "2014年分類亞軍(定位冠軍)VGGNet透過建立更多層的模型，達到了16及19個隱藏層",
          link: "https://hackmd.io/abl-pYsXTiKAO3vdt1yVCg?view",
        },
        {
          title: "人臉辨識 FaceNet",
          desc:
            "現階段的人臉辨識，是由一系列的便是問題所組成，本文將詳述辨識各項步驟",
          link: "https://hackmd.io/aquN3Hk7RLmXgNDmERdXcw",
        },
        {
          title: "物體定位 YOLOv3",
          desc:
            "Yolo系列是關於物件偵測的類神經網路演算法，能夠快速判斷圖形內的物體位置與類別...",
          link: "/yolov3",
        },
        { title: "風格轉換 CycleGAN", desc: "fjeifef", link: "" },
      ],
      cv: [
        {
          title: "Object Detection 的演變",
          desc: (
            <div>
              介紹物體定位演變的重要模型，與基礎原理
              <br />
              包含R-CNN一直到近代的YOLO及M2Det
            </div>
          ),
          link: "https://hackmd.io/Od3xxvfGQbKC0_1p7oOCsA",
        },
        // { title: "tittitititllle", desc: "fjeifef", link: "" },
        // { title: "tittitititllle", desc: "fjeifef", link: "" },
        // { title: "tittitititllle", desc: "fjeifef", link: "" },
        // { title: "tittitititllle", desc: "fjeifef", link: "" },
        // { title: "tittitititllle", desc: "fjeifef", link: "" },
      ],
      video: [
        {
          title: "Machine Learning",
          desc: "台大李宏毅老師",
          link:
            "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49",
        },
        {
          title: "Advanced Deep Learning",
          desc: "台大李宏毅老師",
          link:
            "https://www.youtube.com/watch?v=IzHoNwlCGnE&list=PLJV_el3uVTsPMxPbjeX7PicgWbY7F8wW9",
        },
        {
          title: "深度學習 - Coursera",
          desc: "Andrew Ng 吳恩達教授",
          link: "https://www.coursera.org/specializations/deep-learning",
        },
        {
          title: "Stanford CS231n",
          desc: "CNN for Visual Recognition",
          link: "http://cs231n.stanford.edu/index.html",
        },
        // { title: "tittitititllle", desc: "fjeifef", link: "" },
        // { title: "tittitititllle", desc: "fjeifef", link: "" },
      ],
    },
    categories: [
      {
        eventKey: "finance",
        name: "財經",
        icon: "/images/knowledge/fin-1.png",
        news: [
          {
            title: "人工智慧加入，金融科技新高度",
            imgPath:
              "https://scitechvista.nat.gov.tw/context/image/jpg/48a795e4637f2d0bb8f61d1898db337df1d9a5fed8c12c1fc827fba996edd31c_1000_667.jpg",
            date: "2019/03/25",
            desc:
              "圍棋人工智慧AlphaGo在前年（2017）以連三勝的戰績打敗人類棋王， 轟動了整個世界。另一方面，人們也開始思考人工智慧技術在金融界的應用，如何幫助使用者更方便快速地使用服務、減少人力成本？...",
            id: 0,
          },
          {
            title: "人工智慧與金融應用 - IBM",
            imgPath:
              "https://www.ibm.com/blogs/think/tw-zh/wp-content/uploads/sites/13/2019/09/%E5%9C%96%E7%89%87%E4%B8%80_%E5%A4%A7%E8%85%A6.png",
            date: "2019/09/27",
            desc:
              "現今消費者自我意識增強，期望企業可瞭解個體差異，以提供更貼近個人化需求之服務，若企業僅以人工預設的簡單規則、制式化的輪播廣告方式行銷，已無法滿足消費者所需...",
            id: 1,
          },
          {
            title: "攜手AI擁抱創新路 四大應用讓台灣金融業改頭換面",
            imgPath:
              "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/07/04/99/6523815.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050&exp=3600&exp=3600",
            date: "2019/07/04",
            desc:
              "金融科技的應用，應以客戶需求為依歸，而不是為了實驗金融科技而應用科技。面對快速變遷，金融機構需要關注人工智慧發展趨勢，攜手科技公司，提升人工智慧相關金融應用知識，以激發創新應用。...",
            id: 2,
          },
          {
            title: "央行示警：AI 運用於金融科技有六大潛在風險",
            imgPath:
              "https://img.technews.tw/wp-content/uploads/2016/09/08174655/shutterstock_234722569.jpg",
            date: "2020/09/03",
            desc:
              "AI是金融科技的先進技術之一，但 AI 運用於金融服務亦存在六大潛在風險，包含道德問題、隱私保護問題、市場波動性提高、市場價格操縱、集中委外風險以及「黑箱」決策....",
            id: 3,
          },
        ],
      },
      {
        eventKey: "industry",
        name: "工業",
        icon: "/images/knowledge/industry.png",
        news: [
          {
            title:
              "「有些企業根本不適合工業4.0！」智慧製造第一步：換腦袋、重新定義組織",
            imgPath:
              "https://bnextmedia.s3.hicloud.net.tw/image/album/2017-09/img-1506757112-95992@600.jpg",
            date: "2017/10/23",
            desc:
              "雖然工業4.0已經從概念走向應用，但多數人談論時，依然把焦點放在技術，這會限縮它的效益。",
            id: 0,
          },
          {
            title: "工業4.0大全，從淺到深一篇搞懂它！",
            imgPath:
              "https://blog.semi.org/hubfs/%E5%B7%A5%E6%A5%AD4.0%E6%A6%82%E5%85%A8.jpg",
            date: "2019/01/14",
            desc:
              "生產一個客製化的產品，需要多久時間？答案是58秒。  這並非未來，在工業4.0的時代，是現在進行式。",
            id: 1,
          },
          {
            title: "工業4.0──58秒的競爭",
            imgPath:
              "https://topic.cw.com.tw/2016industry4.0/images/syslm-1.svg",
            date: "2016",
            desc:
              "2016年中，天下再報導工業4.0，這次前進六個國家、九個現場，親訪德國的兩位大師，帶回「工業4.0不是自動化，而是整條價值鏈全週期管理與服務」的新觀念。",
            id: 2,
          },
          {
            title: "善用IAI工業人工智慧 打造無憂工廠",
            imgPath: "/images/knowledge/news.png",
            date: "2019/07/16",
            desc:
              "人工智慧(AI)的概念，近年來隨著各產業與領域中的普及應用導入，已經越來越為人所知。相較於人工智慧，更專注應用在工業生產領域中的工業人工智慧(IAI)則就相對讓人感到陌生。",
            id: 3,
          },
        ],
      },
      {
        eventKey: "med",
        name: "醫療",
        icon: "/images/knowledge/med.png",
        news: [
          {
            title: "淺析台灣人工智慧醫療之發展",
            imgPath:
              "https://portal.stpi.narl.org.tw/image/4b1141427395c699017395c702680fb3",
            date: "2019/05/28",
            desc:
              "2016年Google旗下研發機構發表第一篇藉由機器深度學習，早期診斷糖尿病視網膜病變的論文，將人工智慧於醫療之應用，推向新的紀元（PingWest, 2017）。...",
            id: 0,
          },
          {
            title: "現階段AI人工智慧在醫療領域的4大應用",
            imgPath:
              "https://heho.com.tw/wp-content/uploads/2018/08/AI_%E9%86%AB%E7%99%82.png",
            date: "2018/08/17",
            desc:
              "AI人工智慧最初在科幻小說或電影中登場，被賦予了很多的科幻和未來的想像；而今AI人工智慧蓬勃發展，應用在生活各個領域，科學家也想辦法開發人工智慧應用於解決醫療領域的問題，希望能夠幫助患者診斷疾病或治療。...",
            id: 1,
          },
          {
            title:
              "《從AI到智慧醫療》：醫師不可能記住每一個醫療案例，而這正是電腦的絕對優勢",
            imgPath:
              "https://image1.thenewslens.com/2020/4/lv810jo3o772c65fopns56bt6u64rk.jpg?auto=compress&h=648&q=80&w=1080",
            date: "2020/07/07",
            desc:
              "隨著現代人生活步調越來越快，大海撈針式的查詢功能已經無法滿足使用者需求...",
            id: 2,
          },
          {
            title: "AI風潮來襲！人工智慧的醫療照護應用",
            imgPath:
              "https://scitechvista.nat.gov.tw/context/image/jpg/b9824617c064c46c87dca521db638bcd2656ce875318449ffa8f4d2f6c6652ac_1000_667.jpg",
            date: "2019/03/22",
            desc:
              "近年來，國內外積極推出智慧健康照護機器人，銀髮族藉由聲控方式與機器人對話，從對話與數據傳輸進行遠端諮詢與簡單健康檢測...",
            id: 3,
          },
        ],
      },
      {
        eventKey: "iot",
        name: "物聯網",
        icon: "/images/knowledge/iot.png",
        news: [
          {
            title:
              "【智慧生活轉型】市民卡、消防救災、污水處理到節能減碳，桃園市用AIoT搞定市民大小事",
            imgPath:
              "https://inside-assets1.inside.com.tw/2020/9/iaq53epelu0qqgxs8qr0gysj1hoc70.png?auto=compress&fit=max&w=730&dpr=1",
            date: "2020/09/25",
            desc:
              "從物聯網概念的誕生，到 5G 行動通訊技術、人工智慧等新科技的高速發展，各種創新應用紛紛問世...",
            id: 0,
          },
          {
            title: "智慧城市十年藍圖，AIoT 的應用趨勢與挑戰",
            imgPath:
              "https://inside-assets1.inside.com.tw/2020/9/qcbpzapqzdb5jpg0jtlj195rplvd2u.jpg?auto=compress&fit=max&w=730&dpr=1",
            date: "2020/09/15",
            desc:
              "結合人工智慧與物聯網兩大技術的「智慧物聯網」，在 5G 時代下將成為更熱門、且落實於人們生活當中的科技名詞。當 AIoT 技術帶來更高效的物連網運作，透過人工智慧即時分析數據，將之轉化為實用資訊與具體決策...",
            id: 1,
          },
          {
            title: "AIoT：未來 20 年最強的產業顛覆力",
            imgPath:
              "https://inside-assets1.inside.com.tw/2020/9/s2o8zum8pr9kr8vy324n599zbjntrm.jpg?auto=compress&fit=max&w=730&dpr=1",
            date: "2020/09/15",
            desc:
              "AIoT 可說是眾多科技關鍵字裡，改變世界力量最強、產值也最大的現在進行式之一。顧名思義，AIoT 是人工智慧（AI） 加上物聯網（IoT）混合產出的架構...",
            id: 2,
          },
          {
            title: "什麼是AIoT？人工智慧照亮IoT進化路，推動3大關鍵應用領域",
            imgPath:
              "https://bnextmedia.s3.hicloud.net.tw/image/album/2019-06/img-1561346781-59097@900.jpg",
            date: "2019/06/24",
            desc:
              "IoT（物聯網）導入AI（人工智慧）成為AIoT（人工智慧物聯網），許多家電產品、工廠生產都有了「智慧」，究竟各家大廠口中的智慧家居升級是什麼概念呢？AIoT又憑何本事滿足人類需求？...",
            id: 3,
          },
        ],
      },
    ],
  };

  componentDidMount = () => {
    let currentContent = {};
    this.state.categories.forEach((category) => {
      if (this.state.currentNews === category.name) {
        currentContent = category;
      }
    });
    let title = document.querySelector(`#${currentContent.name} > span`);
    let triangle = document.querySelector(`#${currentContent.name} > div`);
    title.classList.add("news-title");
    triangle.classList.remove("hidden");
  };

  openTab = (link) => {
    if (link.length > 0) {
      window.open(link, "_blank");
    } else {
      return;
    }
  };

  renderTeachings = (teaches) => {
    let tempTeaching = []; //teaches
    // console.log(Math.ceil(teaches.length / 3));
    console.log(this.props);
    for (let i = 0; i < Math.ceil(teaches.length / 3); i++) {
      // console.log(i);
      let children = teaches.slice(i * 3, i * 3 + 3);
      children = children.map((child) => (
        <div
          className="main-shadow border-radius p-3 w-32"
          onClick={() => this.openTab(child.link)}
        >
          <div className="third-title text-left">{child.title}</div>
          <div>{child.desc}</div>
        </div>
      ));
      console.log(children.length);
      if (children.length === 2) {
        children.push(<ArticleCard visibility="hidden" />);
      }
      tempTeaching.push(
        <div className="mt-4 w-100 d-flex justify-content-between align-items-center">
          {children}
        </div>
      );
    }
    return (
      <div className='w-100 d-flex flex-column justify-content-center align-items-center"'>
        {tempTeaching}
      </div>
    );
  };

  handleChangeCategory = (e) => {
    let { currentNews } = this.state;
    this.setState({ currentNews: e, previous: currentNews }, () => {
      let currentContent = {};
      let previousContent = {};
      this.state.categories.forEach((category) => {
        if (this.state.currentNews === category.name) {
          currentContent = category;
        }
        if (this.state.previous === category.name) {
          previousContent = category;
        }
      });

      let preimg = document.querySelector(`#${previousContent.name} > img`);
      let pretitle = document.querySelector(`#${previousContent.name} > span`);
      let pretriangle = document.querySelector(
        `#${previousContent.name} > div`
      );
      preimg.src = `${preimg.src.slice(0, -6)}.png`;
      pretitle.classList.remove("news-title");
      pretriangle.classList.add("hidden");

      let img = document.querySelector(`#${currentContent.name} > img`);
      let title = document.querySelector(`#${currentContent.name} > span`);
      let triangle = document.querySelector(`#${currentContent.name} > div`);
      img.src = `${img.src.slice(0, -4)}-1.png`;
      title.classList.add("news-title");
      triangle.classList.remove("hidden");

      console.log(this.state.currentNews);
    });
  };
  renderNewsTab = (current) => {
    let currentContent = {};
    this.state.categories.forEach((category) => {
      if (current === category.name) {
        currentContent = category;
      }
    });
    return <NewsTab title={currentContent.name} news={currentContent.news} />;
  };

  renderCategories = (categories) => {
    return categories.map((category) => (
      <NewsTheme
        title={category.name}
        imgPath={category.icon}
        onClick={this.handleChangeCategory}
      />
    ));
  };

  render() {
    return (
      <>
        <HomeInstances
          title="知識補充站"
          description={
            <div className="mt-3">
              當你對人工智慧技術知識
              <br />
              和專有名詞感到頭痛的時候，
              <br />
              快探索網頁來緩解你的痛
            </div>
          }
          imgPath="/images/knowledge/knowledge.png"
        />
        <div className="py-5 container" id="teachings">
          <div className="secondary-title mb-3">教學專區</div>
          <Tabs defaultActiveKey="basic" id="uncontrolled-tab-example">
            <Tab eventKey="basic" title="基本知識">
              {this.renderTeachings(this.state.teachings.basic)}
            </Tab>
            <Tab eventKey="model" title="模型架構">
              {this.renderTeachings(this.state.teachings.model)}
            </Tab>
            <Tab eventKey="cv" title="電腦視覺演變">
              {this.renderTeachings(this.state.teachings.cv)}
            </Tab>
            <Tab eventKey="video" title="相關教學影片">
              {this.renderTeachings(this.state.teachings.video)}
            </Tab>
          </Tabs>

          <div className="my-5 py-5" id="evaluate">
            <div className="secondary-title my-5">學習成效評估</div>
            <div className="d-flex justify-content-around align-items-center">
              <button className="btn-main w-25" style={{ height: "80px" }}>
                EASY
                <br />
                簡單模式
              </button>
              <button className="btn-main w-25" style={{ height: "80px" }}>
                NORMAL
                <br />
                一般模式
              </button>
              <button className="btn-main w-25" style={{ height: "80px" }}>
                HARD
                <br />
                困難模式
              </button>
            </div>
          </div>
        </div>
        <div className="w-100 panel py-5" id="news">
          <div className="container d-flex justify-content-between">
            <div>
              <div className="secondary-title text-left">HowAI News</div>
              <div className="content-color mt-1">
                想知道人工智慧的入門知識
                <br />
                和各種有趣的應用場域和新知嗎 ？
              </div>
            </div>
            <div>
              <img src="/images/Knowledge/news.png" width="115" />
            </div>
          </div>
        </div>
        <div className="container py-5 mb-5">
          <div className="d-flex justify-content-center mt-4">
            {this.renderCategories(this.state.categories)}
          </div>
          {this.renderNewsTab(this.state.currentNews)}
        </div>
      </>
    );
  }
}

export default KnowledgeHome;
