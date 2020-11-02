import React, { Component } from "react";
import HomeInstances from "../../Components/HomeInstances";

class CustomHome extends Component {
  render() {
    return (
      <>
        <HomeInstances
          title="客製化模型"
          description={
            <div className="mt-3">
              還在苦惱訓練模型困難重重嗎？
              <br />
              只要準備好資料集， <br />
              就可以輕鬆訓練自己的模型！
            </div>
          }
          imgPath="/images/custom/custom.png"
          btn={
            <>
              <a href="personal-model-list">
                <button
                  className="btn btn-main mt-3"
                  style={{ width: "180px" }}
                >
                  前往個人模型庫
                </button>
              </a>
              <a href="new-model" className="ml-3">
                <button className="btn btn-main mt-3">創建新模型</button>
              </a>
            </>
          }
        />

        <div className="py-5 container">
          <div className="secondary-title">操作說明</div>
          <div className="py-5">
            <img src="/images/custom/custom-tutor.jpg" alt="" />
            <img className='pt-5' src="/images/custom/custom-tutor2.jpg" alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default CustomHome;
