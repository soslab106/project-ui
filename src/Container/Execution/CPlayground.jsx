import React, { Component } from "react";
import ModelCheckboxExclusive from "../../Components/ModelCheckboxExclusive";
import { Tabs, Tab } from "react-bootstrap";
import { yoloLabel, imageNetLabel } from "./labels";
import axios from "axios";

class CPlayground extends Component {
  state = {
    file: "",
    modelName: "VGG16",
    modelList: ["vgg", "yolo", "cyclegan", "facenet"], //get from api
    api: "http://140.119.19.99:8000/upload/",
    description: "",
    input: "",
    output: "",
    result: "",
    showModal: false,
    showPic: false,
    labels: [],
    loading: false,
    adversarial_description: "攻擊模型圖片",
    adv: [],
    adv_origin: [],
    category: "", //for cycleGAN
  };

  componentDidMount() {
    const modelParam = this.props.match.params.model;
    this.changeModelsState(modelParam);
    if (!localStorage.getItem('token') && this.state.modelName) {
      window.location.href = '/signin'
      alert('請先登入再進行測試呦!')
    }
  }

  handleFileChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  // change model's corresponding state
  changeModelsState = (modelParam) => {
    switch (modelParam) {
      case "yolo":
        this.setState(
          {
            modelName: "YOLOv3",
            description:
              "本YOLOv3模型是使用COCO dataset進行訓練，因此本模型可以框出81種類別物件",
            input: "一張含有多個物體的圖片",
            output: "框出所有物體位置的圖片",
            file: undefined,
            labels: yoloLabel,
            adv: [],
            adv_origin: [],
            file: "",
            api: "http://140.119.19.99:8000/upload/",
            result: "",
          },
          () => this.changeActivatedModel(modelParam)
        );
        break;
      case "vgg":
        this.setState(
          {
            modelName: "VGG16",
            description:
              "此模型使用ImageNet Dataset訓練，可以辨識一千種物體，詳細類別請查看以下連結",
            input: "一張含有特定物體的圖片",
            output: "可能性前五高的類別，及其機率",
            file: undefined,
            labels: imageNetLabel,
            adv: ["/adv/vgg/adv_vgg_1.jpg", "/adv/vgg/adv_vgg_2.jpg"],
            adv_origin: ["/adv/vgg/vgg_1.jpg", "/adv/vgg/vgg_2.jpg"],
            api: "http://140.119.19.99:8000/upload/",
            file: "",
            result: "",
          },
          () => this.changeActivatedModel(modelParam)
        );
        break;
      case "cyclegan":
        this.setState(
          {
            modelName: "CycleGAN",
            description: "風格轉換模型",
            input: "一張含有人臉圖片",
            output: "原圖轉為辛普森風格的圖片",
            api: "http://140.119.19.99:8000/upload/cycleGAN/",
            file: undefined,
            file: "",
            result: "",
            category: "horse2zebra.pb",
          },
          () => this.changeActivatedModel(modelParam)
        );
        break;
      case "facenet":
        this.setState(
          {
            modelName: "FaceNet",
            description: "可辨識出已經過訓練學習的人臉並標上名字",
            input:
              "於訓練圖片中上傳人臉的照片(請更改檔名)，在欲辨識圖片中上傳你要辨識的照片(含多人)",
            output: "辨識照片中的人臉，框出位置，並標上圖片檔名",
            train: undefined,
            test: undefined,
            api: "http://140.119.19.99:8000/upload/multi/",
            showModal: false,
            loading: false,
            file: "",
            result: "",
          },
          () => this.changeActivatedModel(modelParam)
        );
        break;
      default:
        this.setState({ modelName: "" });
    }
  };

  // change selected model effect
  changeActivatedModel = (modelName) => {
    const { modelList } = this.state;
    modelList.forEach((model) => {
      const dom = document.getElementById(model);
      dom.classList.remove("toggleClicked");
    });
    const label = document.querySelector(`#${modelName}`);
    label.classList.toggle("toggleClicked");
  };

  // handle click effect
  handleModels = (e) => {
    console.log(e.target);
    const target = e.target.id;
    if (target) {
      console.log(target);
      // this.changeActivatedModel(target)
      this.changeModelsState(target);
      // this.setState({modelName:target})
    }
  };

  // For Facenet
  handleTrainChange = (e) => {
    this.setState({ train: e.target.files });
  };

  handleTestChange = (e) => {
    this.setState({ test: e.target.files[0] });
  };
  //facenet render selected test
  renderSelected = () => {
    return (
      <img
        src={URL.createObjectURL(this.state.test)}
        style={{ height: "35vh" }}
      />
    );
  };
  // Facenet end

  // API
  getAPI = () => {
    let { api } = this.state;
    let formData = new FormData();

    if (this.state.modelName === "FaceNet") {
      if (this.state.train && this.state.test) {
        this.setState({ loading: true });

        let { train, test } = this.state;
        console.log(train);
        for (const key of Object.keys(train)) {
          formData.append("train", train[key]);
        }

        formData.append("test", test);
        console.log(test);
        for (var pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
      } else {
        alert("請先選擇照片!");
        return;
      }
    } else if (this.state.modelName === "CycleGAN") {
      if (this.state.file) {
        this.setState({ loading: true });

        let { category, file } = this.state;
        formData.append("category", category);
        formData.append("file", file);
        formData.append("token", localStorage.getItem("token"));

        formData.forEach((e) => console.log(e));
      } else {
        alert("請先選擇照片!");
        return;
      }
    } else {
      if (this.state.file) {
        this.setState({ loading: true });

        let { modelName, file } = this.state;
        formData.append("modelName", modelName);
        formData.append("file", file);
        formData.append("token", localStorage.getItem("token"));

        formData.forEach((e) => console.log(e.toString()));
      } else {
        alert("請先選擇照片!");
        return;
      }
    }

    formData.forEach((e) => console.log(e.toString()));

    axios
      .post(api, formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `JWT ${localStorage.getItem("token").toString()}`,
        },
      })

      .then((res) => {
        console.log(res.status);
        let { data } = res;
        console.log(data);
        this.setState({ result: data.result });
        if(this.state.modelName=='VGG16'){
          document.querySelector('#result-img').classList.remove('main-shadow')
          document.querySelector('#result-img').classList.add('w-50')
        }
      })
      .then(() => {
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error.response.headers);
        alert("連線逾時或檔名有誤，即將重整頁面");
        return;
      });
  };

  renderResult = (modelName) => {
    if (modelName === "VGG16") {
      return (
        <div className='box p-3'>
          {this.state.result.map((each) => {
            return (
              <div className='d-flex row'>
                <div className='col-6'>{each[0]}</div>
                <div className='col-6 text-
                '>{each[1].toFixed(3)}</div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <img
            src={this.state.result}
            alt="no pic"
            style={{ height: "35vh" }}
          />
        </React.Fragment>
      );
    }
  };

  handleSwitchCategory = (e) => {
    this.setState({ category: e.target.value });
  };

  modalClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // e.stopImmediatePropagation();
    return false;
  };

  render() {
    const {
      file,
      modelName,
      loading,
      test,
      showModal,
      showPic,
      labels,
      adv,
      adv_origin,
    } = this.state;
    const resultBlock = (
      <div
        className="d-flex flex-column io-box mb-5 align-items-center p-3"
        style={{ marginTop: "20px", height: "120%" }}
      >
        <div className="third-title">輸入</div>
        <div
          className="m-3 mb-3 main-shadow"
          width="50%"
          height="35vh"
          overflow="auto"
        >
          <img
            src={
              file || test
                ? URL.createObjectURL(file || test)
                : "/images/nopic.png"
            }
            alt="無法顯示圖片"
            style={{ height: "35vh" }}
          />
        </div>
        <div className="third-title">輸出</div>
        <div id='result-img' className="m-3 mb-3 main-shadow" style={{ height: "35vh" }}>
          {this.state.result ? (
            this.renderResult(modelName)
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
              <input
                name="direction"
                type="radio"
                id="zebra"
                value="zebra2horse.pb"
                onClick={(e) => {
                  this.handleSwitchCategory(e);
                }}
              />
              <label className="content-color p-3" for="zebra">
                斑馬⟶馬
              </label>
              <input
                name="direction"
                type="radio"
                id="horse"
                value="horse2zebra.pb"
                onClick={(e) => {
                  this.handleSwitchCategory(e);
                }}
              />
              <label className="content-color p-3" for="horse">
                馬⟶斑馬
              </label>
            </Tab>
            <Tab eventKey="apple-orange" title="蘋果橘子轉換">
              <input
                name="direction"
                type="radio"
                id="apple"
                value="apple2orange.pb"
                onClick={(e) => {
                  this.handleSwitchCategory(e);
                }}
              />
              <label className="content-color p-3" for="apple">
                蘋果⟶橘子
              </label>
              <input
                name="direction"
                type="radio"
                id="orange"
                value="orange2apple.pb"
                onClick={(e) => {
                  this.handleSwitchCategory(e);
                }}
              />
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

    const facenetResult = (
      <div className="col-8">
        <div className="box p-20">
          <table className="w-100">
            <tr>
              <td height="50px">
                <label>目標人臉圖片</label>
              </td>
              <td height="50px">
                <input
                  type="file"
                  className="file-label"
                  name="train"
                  onChange={this.handleTrainChange}
                  style={{ height: "37px", width: "350px" }}
                  multiple
                />
              </td>
            </tr>
            <tr>
              <td height="50px">
                <label>欲辨識圖片</label>
              </td>
              <td height="50px">
                <input
                  type="file"
                  className="file-label"
                  name="test"
                  onChange={this.handleTestChange}
                  style={{ height: "37px", width: "350px" }}
                />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-main ml-2"
                  onClick={this.getAPI}
                  style={{ left: "350px" }}
                >
                  執行
                </button>
              </td>
            </tr>
          </table>
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

    const NoMatch = (
      <div className="expand-full">
        <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <code className='info-title' style={{color:'#29b4be'}}>{this.props.match.url}</code><div className='info-title'>無此頁面</div>
        </div>
      </div>
    );

    const loadingPage = (
      <div className="loading d-flex flex-column align-items-center justify-content-center">
        <img src="/images/Loading_2.gif" width="50" />
        <div className="mt-3">Loading...</div>
      </div>
    );

    const popupLabels = (
      <div
        className="background-close d-flex justify-content-center align-items-center"
        onClick={() => this.setState({ showModal: false })}
      >
        <div className="label-modal" onClick={(e) => this.modalClick(e)}>
          <div className="d-flex justify-content-between">
            <h4 className="third-title">可辨識類別 - {modelName}</h4>
            <h4
              className="close-modal"
              onClick={() => this.setState({ showModal: false })}
            >
              &times;
            </h4>
          </div>
          <div
            className="content-color"
            style={{ height: "90%", overflow: "auto" }}
          >
            {labels.map((label) => (
              <li>{label}</li>
            ))}
          </div>
        </div>
      </div>
    );

    const adv_map = adv.map((e, i) => (
      <div>
        {i + 1}.<br />
        <img src={e} />
      </div>
    ));
    const adv_origin_map = adv_origin.map((e, i) => (
      <div>
        {i + 1}.<br />
        <img src={e} />
      </div>
    ));
    const popupPics = (
      <div
        className="background-close d-flex justify-content-center align-items-center"
        onClick={() => this.setState({ showPic: false })}
      >
        <div className="adv-modal" onClick={(e) => this.modalClick(e)}>
          <div className="d-flex justify-content-between">
            <h4 className="third-title">攻擊模型圖片</h4>

            <h4
              className="close-modal"
              onClick={() => this.setState({ showPic: false })}
            >
              &times;
            </h4>
          </div>
          <div style={{ height: "90%", overflow: "auto" }}>
            <h4 className="info-title">原始圖片</h4>
            <div>{adv_origin_map}</div>
            <h4 className="info-title">Adversarial圖片</h4>
            <div>{adv_map}</div>
          </div>
        </div>
      </div>
    );

    const exeMain = (
      <>
        {loading ? loadingPage : ""}
        {showModal ? popupLabels : ""}
        {showPic ? popupPics : ""}
        <div className="panel w-100">
          <div className="container py-5">
            {/* d-flex flex-column align-items-center  */}
            <div className="secondary-title">{modelName}</div>
            <div className="d-flex row my-5">
              <div className="col-4">
                <div className="info-title">模型選擇</div>
                <div onClick={this.handleModels}>
                  <ModelCheckboxExclusive
                    // className="toggleClicked"
                    // checked={modelName === "VGG16" ? "checked" : ""}
                    modelName="影像辨識 - VGG"
                    id="vgg"
                  />
                  <ModelCheckboxExclusive
                    modelName="物體定位 - YOLOv3"
                    id="yolo"
                  />
                  <ModelCheckboxExclusive
                    modelName="風格轉換 - CycleGAN"
                    id="cyclegan"
                  />
                  <ModelCheckboxExclusive
                    modelName="人臉辨識 - FaceNet"
                    id="facenet"
                  />
                </div>

                <div className="box mt-20 p-20">
                  <div className="info-title" style={{ textAlign: "left" }}>
                    輸入格式
                  </div>
                  <div>
                    {this.state.input}
                    <br />
                    <span style={{ color: "#29B4BE" }}>**檔名須為英文**</span>
                  </div>
                </div>
                <div className="box mt-20 p-20">
                  <div className="info-title" style={{ textAlign: "left" }}>
                    輸出格式
                  </div>
                  <div> {this.state.output}</div>
                </div>
                {modelName == "VGG16" || modelName == "YOLOv3" ? (
                  <>
                    <div
                      className="info-title mt-20"
                      style={{ textAlign: "left" }}
                    >
                      其他輔助功能
                    </div>
                    <div className="d-flex flex-column">
                      <button
                        className="btn btn-main mt-10"
                        onClick={() =>
                          this.setState(
                            { showModal: true },
                            console.log(showModal)
                          )
                        }
                      >
                        辨識類別
                      </button>
                      {modelName == "VGG16" ? (
                        <button
                          className="btn btn-main mt-10"
                          style={{ width: "185px" }}
                          onClick={() =>
                            this.setState(
                              { showPic: true },
                              console.log(showPic)
                            )
                          }
                        >
                          攻擊模型圖片
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>

              {/* result */}
              {/* {modelName === "CycleGAN" ? facenetResult : normalResult}  */}
              {modelName === "CycleGAN"
                ? cycleganResult
                : modelName === "FaceNet"
                ? facenetResult
                : normalResult}
            </div>
          </div>
        </div>
      </>
    );
    return modelName ? exeMain : NoMatch;
  }
}

export default CPlayground;
