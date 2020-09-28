import React, { Component } from "react";

class PersonalModelView extends Component {
  // Call API to get users' all custom models
  state = {
    modelList: [  // get this from api
      {modelName:'aaa', date:'2020/09/10', base:'VGG', modellink:`${localStorage.getItem('username')} abc`},
      {modelName:'bbb', date:'2020/09/11', base:'VGG', modellink:`${localStorage.getItem('username')} abc`},
      {modelName:'ccc', date:'2020/09/12', base:'VGG', modellink:`${localStorage.getItem('username')} abc`},
      {modelName:'ddd', date:'2020/09/13', base:'VGG', modellink:`${localStorage.getItem('username')} abc`},
    ]
  }

  renderTable = () => {
    return this.state.modelList.map(model=>(
      <>
        <div className="py-3 d-flex w-100 justify-content-around">
          <div>{model.modelName}</div>
          <div>{model.date}</div>
          <div>{model.base}</div>
          <div>{model.modellink}</div>
        </div>
      </>)
    );
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
          {this.renderTable()}
        </div>
      </div>
    );
  }
}

export default PersonalModelView;
