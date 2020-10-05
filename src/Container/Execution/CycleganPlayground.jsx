import React, { Component } from "react";
import ModelCheckboxExclusive from "../../Components/ModelCheckboxExclusive";
import { Tabs, Tab } from "react-bootstrap";

class CycleganPlayground extends Component {
  state = {
    file: "",
    currentModel: "VGG",
    modelList: ["VGG", "YOLO", "CycleGAN", "FaceNet"], //get from api
  };

  handleModels = (e) => {
    const { modelList } = this.state;
    console.log(e.target);
    const target = e.target.id;
    if (target) {
      console.log(target);
      modelList.forEach((model) => {
        const dom = document.getElementById(model);
        const check = document.querySelector(`#${model} > input`);
        dom.classList.remove("toggleClicked");
        // check.checked = false;
      });
      const label = document.querySelector(`#${target}`);
      label.classList.toggle("toggleClicked");
      this.setState({ currentModel: target });
    }
  };
  render() {
    const { file, currentModel } = this.state;
    const resultBlock = (
      <div
        className="d-flex flex-column io-box mb-5 align-items-center p-3"
        style={{ marginTop: "20px", height: "90vh" }}
      >
        <div className="third-title">輸入</div>
        <div
          className="m-3 mb-3 main-shadow"
          width="50%"
          height="35vh"
          overflow="auto"
        >
          <img
            src={file ? URL.createObjectURL(file) : "/images/nopic.png"}
            alt="無法顯示圖片"
            style={{ height: "35vh" }}
          />
        </div>
        <div className="third-title">輸出</div>
        <div className="m-3 mb-3 main-shadow" style={{ height: "35vh" }}>
          {this.state.result ? (
            this.renderResult(currentModel)
          ) : (
            <img
              src="/images/nopic.png"
              alt="無法顯示圖片"
              style={{ height: "35vh" }}
            />
          )}
        </div>
      </div>
    );
    const cycleganResult = (
      <div className="col-8">
        <div className="box p-20">
          <div className="third-title">輸入設定</div>
          <Tabs defaultActiveKey="horse-zebra">
            <Tab eventKey="horse-zebra" title="馬與斑馬轉換">
              <input name="direction" type="radio" id="zebra" value="zebra" />
              <label className="content-color p-3" for="zebra">
                斑馬⟶馬
              </label>
              <input name="direction" type="radio" id="horse" value="horse" />
              <label className="content-color p-3" for="horse">
                馬⟶斑馬
              </label>
            </Tab>
            <Tab eventKey="apple-orange" title="蘋果橘子轉換">
              <input name="direction" type="radio" id="apple" value="apple" />
              <label className="content-color p-3" for="apple">
                蘋果⟶橘子
              </label>
              <input name="direction" type="radio" id="orange" value="orange" />
              <label className="content-color p-3" for="orange">
                橘子⟶蘋果
              </label>
            </Tab>
          </Tabs>
          <div className="third-title">上傳圖片</div>
          <div className="d-flex my-4 align-items-center">
            <input
              type="file"
              className="file-label"
              name="input"
              onChange={this.handleFileChange}
              style={{ height: "37px" }}
            />
            <button
              type="button"
              className="btn btn-main ml-3"
              onClick={this.getAPI}
            >
              執行
            </button>
          </div>
        </div>
        <div className="box mt-4">{resultBlock}</div>
      </div>
    );

    const normalResult = (
      <div className="col-8">
        <div className="box p-20">
          <div className="info-title text-center">上傳欲轉換圖片</div>
          <div className="d-flex my-4 align-items-center">
            <input
              type="file"
              className="file-label"
              name="input"
              onChange={this.handleFileChange}
            />
            <button
              type="button"
              className="btn btn-main ml-3"
              onClick={this.getAPI}
            >
              執行
            </button>
          </div>
          {resultBlock}
        </div>
      </div>
    );
    return (
      <div className="panel w-100">
        <div className="container py-5">
          <div className="secondary-title">{currentModel}</div>
          <div className="d-flex row mt-5">
            <div className="col-4">
              <div className="info-title">模型選擇</div>
              <div onClick={this.handleModels}>
                <ModelCheckboxExclusive
                  className="toggleClicked"
                  checked={currentModel === "VGG" ? "checked" : ""}
                  modelName="影像辨識 - VGG"
                  id="VGG"
                />
                <ModelCheckboxExclusive modelName="物體定位 - YOLO" id="YOLO" />
                <ModelCheckboxExclusive
                  modelName="風格轉換 - CycleGAN"
                  id="CycleGAN"
                />
                <ModelCheckboxExclusive
                  modelName="人臉辨識 - FaceNet"
                  id="FaceNet"
                />
              </div>

              <div className="box mt-20 p-20">
                <div className="third-title" style={{ textAlign: "left" }}>
                  輸入格式
                </div>
                <div>
                  一張含有特定物體的圖片
                  <br />
                  <span style={{ color: "#29B4BE" }}>**檔名須為英文**</span>
                </div>
              </div>
              <div className="box mt-20 p-20">
                <div className="third-title" style={{ textAlign: "left" }}>
                  輸出格式
                </div>
                <div>可能性前五高的類別，及其機率</div>
              </div>
              <div className="third-title mt-20" style={{ textAlign: "left" }}>
                其他輔助功能
              </div>
              <div className='d-flex flex-column'>
              <button className="btn btn-main mt-10">辨識類別</button>
              <button className="btn btn-main mt-10" style={{width:'185px'}}>攻擊模型圖片</button>
              </div>
            </div>

            {/* result */}
            {currentModel === "CycleGAN" ? cycleganResult : normalResult}
          </div>
        </div>
      </div>
    );
  }
}

export default CycleganPlayground;
