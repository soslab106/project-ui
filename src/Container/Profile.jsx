import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    logged_in: localStorage.getItem("token") ? true : false,
    username: localStorage.getItem("username"),
    email: localStorage.getItem("email"),
  };

  componentDidMount = () => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/signin";
      alert("請先登入!");
    }
  };
  render() {
    return (
      <div className="h-100 panel">
        <div className="container d-flex flex-column align-items-center justify-content-center py-5 ">
          <div className="main-title mb-5">個人資料</div>
          <div className="d-flex align-items-center w-100 mb-3">
            <div className="col-4 d-flex flex-column align-items-center">
              <img src="/images/user.png" className="profile-img mb-3" />
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div>{this.state.username}</div>
                <div>上次登入時間 2020/2/2</div>
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex flex-column justify-content-center profile-info">
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <div>電子郵件</div>
                    <div>{this.state.email}</div>
                  </div>

                  <Link to="/#">
                    <button className="btn-main">修改email</button>
                  </Link>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <div>密碼</div>
                    <div>*********</div>
                  </div>
                  <Link to="/#">
                    <button className="btn btn-lg btn-main ">更改密碼</button>
                  </Link>
                </div>
                {/* <div className="d-flex flex-row justify-content-between">
                  <div>
                    <div>使用過的模型</div>
                    <div></div>
                  </div>
                  <Link to="/Menu">
                    <button className="btn btn-lg btn-main ">顯示列表</button>
                  </Link>
                </div> */}
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <div>客製化模型記錄</div>
                    <div></div>
                  </div>
                  <Link to="/personal-model-list">
                    <button className="btn btn-lg btn-main ">顯示列表</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
