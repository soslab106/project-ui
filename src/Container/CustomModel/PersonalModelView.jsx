import React, { Component } from "react";

class PersonalModelView extends Component {
  // Call API to get users' all custom models

  renderTable = () => {
    return "123";
  };

  render() {
    return (
      <div
        className="py-5 d-flex flex-column align-items-center flex-column"
        style={{ backgroundColor: "#F6F8F8", fontSize: "20px" }}
      >
        <div className="secondary-title">個人模型庫</div>
        <div className="w-75 mt-5" id="model-list">
          <div className="py-3 d-flex w-100 justify-content-around w-100">
            <div>專案名稱</div>
            <div>創建日期</div>
            <div>模型基礎</div>
            <div>前往使用</div>
          </div>
          <div className="py-3 d-flex w-100 justify-content-around">fwefef</div>
          <div className="py-3 d-flex w-100 justify-content-around">edefe</div>
          {this.renderTable()}
        </div>
      </div>
    );
  }
}

export default PersonalModelView;
