import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar container sticky-top navbar-dark navbar-expand-lg navbar-light p-2 mb-5">
        <a href="/">
          <img
            alt="123"
            src="/images/howAI icon2.svg"
            style={{ width: "50px" }}
          />
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
        <div className="collapse navbar-collapse nav-item dropdown" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center">
            
            {/* <li className="nav-item mr-3">
              <a className="nav-link nav-item dropdown" href="/playground-list">
                執行模型選單
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}

            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        執行模型選單
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="vgg-playground">物體辨識 (VGG16)</a>
          <a class="dropdown-item" href="yolov3-playground">物體定位 (YOLOV3)</a>
          <a class="dropdown-item" href="facenet-playground">臉部辨識 (FaceNet)</a>
          <a class="dropdown-item" href="#">風格轉換 (CycleGAN)</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">操作教學</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        客製化訓練模型
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">物體辨識 (VGG16)</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">操作教學</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        AI知識
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/Intro">人工智慧</a>
          <a class="dropdown-item" href="#">模型架構</a>
          <a class="dropdown-item" href="NewsPage">產業應用新知</a>
          <a class="dropdown-item" href="CNN">專有名詞</a>
          <a class="dropdown-item" href="#"></a>
        </div>
      </li>

            {this.props.logged_in ?
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hello! {this.props.username}
                </a>
                <div class="dropdown-menu bg-dark text-white" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item text-white" href="/settings">個人設定</a>
                  <a class="dropdown-item text-white" onClick={this.props.logout}>登出</a>
                </div>
              </li>

              : <React.Fragment><li className="nav-item mr-3">
                <a className="nav-link" href="/signin">
                  登入
              </a>
              </li>

                <li className="nav-item mr-3">
                  <a className="nav-link" href="/signupnew">
                    註冊
              </a>
                </li></React.Fragment>
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
/*<a href="/login"><button className="btn btn-personal" href="# ">
                Personal Info
              </button></a>*/