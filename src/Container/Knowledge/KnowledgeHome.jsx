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
          link: "r3rji2orjo3irj",
        },
        {
          title: "類神經網路",
          desc: <div>深度學習的基礎原理、來源等等的背景知識介紹</div>,
          link: "r3rji2orjo3irj",
        },
        {
          title: "電腦視覺",
          desc: (
            <div>
              介紹電腦視覺的基礎知識，以及如何將人工智慧、深度學習應用在此領域中
            </div>
          ),
          link: "r3rji2orjo3irj",
        },
        {
          title: "卷積神經網路",
          desc: (
            <div>
              介紹可應用於電腦視覺的基礎深度學習模型、及其相關簡易運作原理
            </div>
          ),
          link: "r3rji2orjo3irj",
        },
        {
          title: "自然語言處理",
          desc: (
            <div>
              介紹自然語言定義、相關處理，與可分析之方法、深度學習模型等等
            </div>
          ),
          link: "r3rji2orjo3irj",
        },
        {
          title: "遞迴神經網路",
          desc: (
            <div>
              介紹可應用於自然語言處理的基礎深度學習模型，以及基礎運作原理
            </div>
          ),
          link: "r3rji2orjo3irj",
        },
      ],
      model: [
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
      ],
      cv: [
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
      ],
      video: [
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
        { title: "tittitititllle", desc: "fjeifef", link: "r3rji2orjo3irj" },
      ],
    },
    categories: [
      {
        eventKey: "finance",
        name: "財經",
        icon: "/images/knowledge/fin-1.png",
        news: [
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
        ],
      },
      {
        eventKey: "industry",
        name: "工業",
        icon: "/images/knowledge/industry.png",
        news: [
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
        ],
      },
      {
        eventKey: "med",
        name: "醫療",
        icon: "/images/knowledge/med.png",
        news: [
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
        ],
      },
      {
        eventKey: "iot",
        name: "物聯網",
        icon: "/images/knowledge/iot.png",
        news: [
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
          },
          {
            title: "titleee",
            imgPath: "/images/knowledge/news.png",
            date: "2020/10/10",
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

  renderTeachings = (teaches) => {
    let tempTeaching = []; //teaches
    // console.log(Math.ceil(teaches.length / 3));
    console.log(this.props);
    for (let i = 0; i < Math.ceil(teaches.length / 3); i++) {
      // console.log(i);
      let children = teaches.slice(i * 3, i * 3 + 3);
      children = children.map((child) => (
        <div className="main-shadow border-radius p-3 w-32">
          <div className="third-title text-left">{child.title}</div>
          <div>{child.desc}</div>
          {/* {child.link} */}
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
        <div className="py-5 container">
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

          <div className="my-5 py-5">
            <div className="secondary-title my-5">學習成效評估</div>
            <div className="d-flex justify-content-around align-items-center">
              <button className="btn-main w-25" style={{height: "80px" }}>EASY<br/>簡單模式</button>
              <button className="btn-main w-25" style={{height: "80px" }}>NORMAL<br/>一般模式</button>
              <button className="btn-main w-25" style={{height: "80px" }}>HARD<br/>困難模式</button>
            </div>
          </div>
        </div>
        <div className="w-100 panel py-5">
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
