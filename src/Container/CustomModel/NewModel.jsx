import React, { Component } from "react";
import ModelCheckboxExclusive from "../../Components/ModelCheckboxExclusive";
import {Link} from 'react-router-dom'

class NewModel extends Component {
  state = {
    file: "",
    currentModel: "VGG",
    modelList: ["VGG", "YOLO", "CycleGAN", "FaceNet"], //get from api
    pjName: "",
    learningRate:'',
    epoch: '',
  };

  handleChange = (e) => {
    let targetState=e.target.name
    let value=e.target.value
    this.setState({[targetState]:value})
  }

  handleNext = (e)=> {
    console.log(this.state)
  }

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
    const { file, currentModel, pjName, epoch, learningRate } = this.state;

    return (
      <div className="panel">
        <div className="container py-5 d-flex flex-column">
          <div className="h-100">
            <div className="secondary-title mb-3">模型設定</div>
            <div className="mb-3">
              <span className="trainning-progress-bar">
                &#x25BA; 建立客製化模型
              </span>
              <span className="trainning-progress-bar-active">
                &#x25BA; 模型設定
              </span>
              <span className="trainning-progress-bar">
                &#x25BA; 設定標籤及上傳圖片
              </span>
              <span className="trainning-progress-bar">&#x25BA; 開始訓練</span>
            </div>
            <div className="d-flex row">
              <div className="col-4">
                <div className="third-title text-left mt-20">專案名稱</div>
                <div className="main-shadow model-checkbox w-100 d-flex justify-content-start align-items-center p-10">
                  <input name='pjName' className='w-100' type="text" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="col-8">
                <div className="third-title text-left mt-20">參數設定</div>
                <div className="d-flex">
                  <div className="d-flex w-100">
                    <div className="main-shadow model-checkbox newmodel-param-icons d-flex justify-content-center align-items-center">
                      <img src="/images/custom/lr.png" width="40" />
                    </div>
                    <div className="justify-content-between main-shadow model-checkbox w-75 ml-10 d-flex justify-content-start align-items-center p-10">
                      Learning Rate
                      <input name='learningRate' className='w-50 text-right' type="text" onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="d-flex w-100">
                    <div className="main-shadow model-checkbox newmodel-param-icons d-flex justify-content-center align-items-center">
                      <img src="/images/custom/epoch.png" width="40" />
                    </div>
                    <div className="justify-content-between main-shadow model-checkbox w-75 ml-10 d-flex justify-content-start align-items-center p-10">
                      Epoch
                      <input name='epoch' className='w-50 text-right' type="text" onChange={this.handleChange}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex row mt-3">
              <div className="col-4">
                <div className="third-title text-left">模型選擇</div>
                <div>
                  {/* onClick={this.handleModels} */}
                  <ModelCheckboxExclusive
                    className="toggleClicked"
                    checked={currentModel === "VGG" ? "checked" : ""}
                    modelName="影像辨識 - VGG"
                    id="VGG"
                  />
                  <ModelCheckboxExclusive
                    modelName="物體定位 - YOLO"
                    id="YOLO"
                    className="disable-model"
                  />
                  <ModelCheckboxExclusive
                    modelName="風格轉換 - CycleGAN"
                    id="CycleGAN"
                    className="disable-model"
                  />
                  <ModelCheckboxExclusive
                    modelName="人臉辨識 - FaceNet"
                    id="FaceNet"
                    className="disable-model"
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="third-title text-left">架構預覽</div>
                <div className="model-checkbox summary p-5 d-flex justify-content-center" style={{cursor:'auto'}}>
                  <code>
                    ________________________________________________________
                    <br />
                    Layer (type) Output Shape Param #<br />
                    ========================================================
                    <br />
                    dense_4 (Dense) (None, 7) 35
                    <br />
                    ________________________________________________________
                    <br />
                    activation_4 (Activation) (None, 7) 0<br />
                    ________________________________________________________
                    <br />
                    dense_5 (Dense) (None, 13) 104
                    <br />
                    ________________________________________________________
                    <br />
                    activation_5 (Activation) (None, 13) 0<br />
                    ________________________________________________________
                    <br />
                    dense_6 (Dense) (None, 5) 70
                    <br />
                    ________________________________________________________
                    <br />
                    activation_6 (Activation) (None, 5) 0<br />
                    ========================================================
                    <br />
                    Total params: 209
                    <br />
                    Trainable params: 209 Non-trainable
                    <br />
                    params: 0<br />
                    ________________________________________________________
                    <br />
                  </code>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-20">
                  <Link to={{pathname:'/labelandImage', state: {pjName:pjName, learningRate:learningRate, epoch:epoch}}}><button className="btn-main" onClick={this.handleNext}>下一步</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewModel;

// {pjName:pjName, learningRate:learningRate, epoch:epoch}