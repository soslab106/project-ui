import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar container sticky-top navbar-dark navbar-expand-lg navbar-light p-2 mb-5">
        <a href="/">
          <img alt="" src="/images/howAI icon2.svg" style={{ width: "50px" }} />
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

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item mr-3">
              <a className="nav-link" href="/playground-list">
                執行模型
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="/playground-list">
                客製化模型
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="/playground-list">
                知識補充站
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="/intro">
                產業應用新知
              </a>
            </li>
            {this.props.logged_in ? (
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
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
                  class="dropdown-menu bg-dark text-white"
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item text-white" href="/settings">
                    個人設定
                  </a>
                  <a
                    class="dropdown-item text-white"
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
      </nav>
    );
  }
}

export default NavBar;
/*<a href="/login"><button className="btn btn-personal" href="# ">
                Personal Info
              </button></a>*/
