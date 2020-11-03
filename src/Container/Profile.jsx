import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="h-100 panel">
        <div className="container d-flex flex-column align-items-center justify-content-center py-5 ">
          <div className="main-title mb-5">個人資料</div>
          <div className="d-flex align-items-center w-100 mb-3">
            <div className="col-4 d-flex flex-column align-items-center">
              <img src="/images/user.png" className="profile-img mb-3" />
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div>王曉明</div>
                <div>上次登入時間 2020/2/2</div>
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex flex-column justify-content-center profile-info">
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <div>電子郵件</div>
                    <div>HowAILab@gmail.com.tw</div>
                  </div>

                  <a href="/Menu">
                    <button className="btn-main">修改email</button>
                  </a>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <div>密碼</div>
                    <div>*********</div>
                  </div>
                  <a href="/Menu">
                    <button className="btn btn-lg btn-main ">更改密碼</button>
                  </a>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <div>使用過的模型</div>
                    <div></div>
                  </div>
                  <a href="/Menu">
                    <button className="btn btn-lg btn-main ">顯示列表</button>
                  </a>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <div>客製化模型記錄</div>
                    <div></div>
                  </div>
                  <a href="/Menu">
                    <button className="btn btn-lg btn-main ">顯示列表</button>
                  </a>
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
