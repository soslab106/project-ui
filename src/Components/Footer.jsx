import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer py-1 h-100">
        <div className="container py-5">
          <div className="row">
            <div className="col-6 d-flex justify-content-between align-items-start">
              <div>
                <div
                  className="footer-title content-color"
                  href="/ModelInfoList"
                >
                  執行模型
                </div>
                <div className="content-color">
                  {/* <Link to={{pathname:'/labelandImage'}}>lmlkk</Link> */}
                  <a href="/cyclegan-playground">
                    <div className="footer-link">物體辨識</div>
                  </a>
                  <a href="/cyclegan-playground">
                    <div className="footer-link">物體定位</div>
                  </a>
                  <a href="/cyclegan-playground">
                    <div className="footer-link">人臉辨識</div>
                  </a>
                  <a href="/cyclegan-playground">
                    <div className="footer-link">風格轉換</div>
                  </a>
                </div>
              </div>
              <div>
                <div className="footer-title content-color" href="/custom">
                  客製化模型
                </div>
                <a href="/personal-model-list">
                  <div className="footer-link">個人模型庫</div>
                </a>
                <a href="/new-model">
                  <div className="footer-link">建立新專案</div>
                </a>
              </div>
              <div>
                <div className="footer-title content-color" href="/knowledge">
                  知識補充站
                </div>
                <a href="/knowledge#teachings">
                  <div className="footer-link">教學專區</div>
                </a>
                <a href="/knowledge#evaluate">
                  <div className="footer-link">學習成效評估</div>
                </a>
                <a href="/knowledge#news">
                  <div className="footer-link">HowAI News</div>
                </a>
              </div>
              <div>
                <div className="footer-title content-color">HowAI 論壇</div>
              </div>
            </div>
            <div className="col-5 d-flex flex-column justify-content-center align-items-start ml-5">
              <a href="/">
                <div className="d-flex align-items-center">
                  <img
                    alt="123"
                    src="/images/icon.png"
                    style={{ width: "50px" }}
                  />
                  <div
                    className="text-center ml-2"
                    style={{
                      color: "#2E3131",
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "22px",
                    }}
                  >
                    HowAI Lab
                  </div>
                </div>
              </a>
              <div>
                <div
                className="mt-4"
                  style={{ color: "#686868" }}
                >
                  Banner vector created by fullvector - <a style={{ color: "#686868" }} href="https://www.freepik.com/free-photos-vectors/banner">www.freepik.com</a>
                </div>
                <div style={{ color: "#686868" }}>
                  Icons made by
                  <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                    style={{ color: "#686868" }}
                  >
                    Freepik
                  </a>
                  from
                  <a
                    href="https://www.flaticon.com/"
                    title="Flaticon"
                    style={{ color: "#686868" }}
                  >
                    www.flaticon.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
