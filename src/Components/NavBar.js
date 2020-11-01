import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar  sticky-top navbar-dark navbar-expand-lg navbar-light p-2">
        <div className="container">
          <a href="/">
            <div className="d-flex align-items-center">
              <img alt="123" src="/images/icon.png" style={{ width: "50px" }} />
              <div
                className="text-center ml-2"
                style={{
                  color: "#29B4BE",
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "22px",
                }}
              >
                HowAI Lab
              </div>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* 未完成，調整classname */}
          <div
            className="collapse navbar-collapse nav-item dropdown"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item dropdown mr-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  執行模型
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/cp-vgg">
                    物體辨識 VGG16
                  </a>
                  <a className="dropdown-item" href="/cp-yolo">
                    物體定位 YOLOV3
                  </a>
                  <a className="dropdown-item" href="/cp-cyclegan">
                    風格轉換 CycleGAN
                  </a>
                  <a className="dropdown-item" href="/cp-facenet">
                    臉部辨識 FaceNet
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/ModelInfoList">
                    操作教學
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown mr-3">
                <a className="nav-link" href="/custom" role="button">
                  客製化訓練模型
                </a>
                {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">物體辨識 (VGG16)</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">操作教學</a>
                </div> */}
              </li>
              <li className="nav-item dropdown mr-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="/knowledge"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  知識補充站
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/knowledge">
                    知識補充站首頁
                  </a>
                  <a className="dropdown-item" href="/knowledge#teachings">
                    教學專區
                  </a>
                  <a className="dropdown-item" href="/knowledge#evaluate">
                    學習成效評估
                  </a>
                  <a className="dropdown-item" href="/knowledge#news">
                    HowAI News
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown mr-3">
                <a className="nav-link" href="/forum" role="button">
                  HowAI 論壇
                </a>
              </li>

              {this.props.logged_in ? (
                <li className="nav-item dropdown mr-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hello! {this.props.username}
                  </a>
                  <div
                    className="dropdown-menu bg-dark text-white"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item text-white" href="/settings">
                      個人設定
                    </a>
                    <a
                      className="dropdown-item text-white"
                      onClick={this.props.logout}
                    >
                      登出
                    </a>
                  </div>
                </li>
              ) : (
                  <React.Fragment>
                    <li className="nav-item mr-3">
                      <a className="nav-link" href="/signin">
                        登入
                    </a>
                    </li>

                    <li className="nav-item mr-3">
                      <a className="nav-link" href="/signup">
                        註冊
                    </a>
                    </li>
                  </React.Fragment>
                )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
/*<a href="/login"><button className="btn btn-personal" href="# ">
                Personal Info
              </button></a>*/
