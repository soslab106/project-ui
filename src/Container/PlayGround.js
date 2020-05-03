import React, { Component } from "react";
import axios from "axios";
import {yoloLabel, imageNetLabel} from "./labels"

class PlayGround extends Component {
  state = {
    modelName: "",
    description: "",
    input: "",
    output: "",
    result: "",
    api: "",
    showModal: false,
    labels: [],
    loading: false,
  };

  componentDidMount() {
    const modelParam = this.props.match.params.model;
    switch (modelParam) {
      case "yolov3-playground":
        this.setState({
          modelName: "YOLOv3",
          description:
            "本YOLOv3模型是使用COCO dataset進行訓練，因此本模型可以框出81種類別物件",
          input: "一張含有多個物體的圖片",
          output: "框出所有物體位置的圖片",
          file: undefined,
          api: "http://127.0.0.1:8000/upload/",
          labels: yoloLabel,
          previousURL:'/yolov3/'
        });
        break;
      case "vgg-playground":
        this.setState({
          modelName: "VGG16",
          description:
            "此模型使用ImageNet Dataset訓練，可以辨識一千種物體，詳細類別請查看以下連結",
          input: "一張含有特定物體的圖片",
          output: "可能性前五高的類別，及其機率",
          file: undefined,
          api: "http://127.0.0.1:8000/upload/",
          labels:imageNetLabel,
          previousURL:'/img-classify'
        });
        break;
      case "resnet-playground":
        this.setState({
          modelName: "ResNet101",
          description:
            "此模型使用ImageNet Dataset訓練，可以辨識一千種物體，詳細類別請查看以下連結",
          input: "一張含有特定物體的圖片",
          output: "可能性前五高的類別，及其機率",
          file: undefined,
          api: "http://127.0.0.1:8000/upload/",
          labels: imageNetLabel,
          previousURL:'/img-classify'

        });
        break;
      default:
        this.setState({ modelName: "" });
    }
  }

  handleFileChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  getAPI = () => {
    if(this.state.file){
      this.setState({ loading: true });

      let { api, modelName, file } = this.state;
      let formData = new FormData();
      formData.append("modelName", modelName);
      formData.append("file", file);
  
      axios
        .post(api, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          let { data } = res;
          console.log(data);
          this.setState({ result: data.result });
        })
        .then(() => {
          this.setState({ loading: false });
        })
        .catch((error) => {
          console.error(error);
        });
    }else{
      alert('請先選擇照片!')
    }
    
  };

  renderResult = (modelName) => {
    switch (modelName) {
      case "YOLOv3":
        return (
          <React.Fragment>
            <img
              src={this.state.result}
              alt="no pic"
              style={{ height: "35vh" }}
            />
          </React.Fragment>
        );
        break;
      default:
        return (
          <table>
            {this.state.result.map((each) => {
              return (
                <tr>
                  <td>{each[0]}</td>
                  <td>{each[1]}</td>
                </tr>
              );
            })}
          </table>
        );
    }
  };

  render() {
    const {
      modelName,
      description,
      input,
      output,
      file,
      result,
      showModal,
      labels,
      loading,
    } = this.state;
    const popupLabels = (
      <div className="label-modal">
        <div className="d-flex justify-content-between">
          <h4>可辨識類別</h4>
          <h4
            className="close-modal"
            onClick={() => this.setState({ showModal: false })}
          >
            &times;
          </h4>
        </div>
        <div style={{ height: "90%", overflow: "auto" }}>
          {labels.map((label) => (
            <li>{label}</li>
          ))}
        </div>
      </div>
    );
    const loadingPage = (
      <div className="loading d-flex flex-column align-items-center justify-content-center">
        <img src="/images/Loading_2.gif" width="50" />
        <div className="mt-3">Loading...</div>
      </div>
    );
    const NoMatch = (
      <div className="container expand-full">
        No match for <code>{this.props.match.url}</code>
      </div>
    );
    const ModelExe = (
      <React.Fragment>
        {loading ? loadingPage : ""}
        <div className="d-flex flex-column align-items-center">
          {showModal ? popupLabels : ""}
          <h1 className="title">{modelName}</h1>
          <div className="container d-flex mt-5">
            <div className="col-4">
              <div>
                <div className="description d-flex flex-column justify-content-around align-items-center">
                  <div>{description}</div>
                  <button
                    className="btn btn-recoglist"
                    onClick={() =>
                      this.setState({ showModal: true }, console.log(showModal))
                    }
                  >
                    辨識類別
                  </button>
                </div>
                <div className="io-box">
                  <h5>輸入格式</h5>
                  {input}
                </div>
                <div className="io-box">
                  <h5>輸出格式</h5>
                  {output}
                </div>
              </div>

              <div className="mt-5">
                <a href="/img-classify">
                  <button className="btn btn-previous">回到模型分類</button>
                </a>
              </div>
            </div>
            <div className="col-8 mt-3">
              <div className="d-flex justify-content-between">
                <input
                  type="file"
                  className="file-label"
                  name="input"
                  onChange={this.handleFileChange}
                />
                <button
                  type="button"
                  className="btn btn-main ml-2"
                  onClick={this.getAPI}
                >
                  執行
                </button>
              </div>
              <div
                className="d-flex flex-column io-box mb-5 align-items-center p-3"
                style={{ marginTop: "20px", height: "90vh" }}
              >
                <h5>輸入</h5>
                <div
                  className="m-3 mb-3"
                  width="50%"
                  height="35vh"
                  overflow="auto"
                >
                  <img
                    src={file ? URL.createObjectURL(file) : "/images/nopic.png"}
                    alt="no pic"
                    style={{ height: "35vh" }}
                  />
                </div>
                <h5>輸出</h5>
                <div className="m-3 mb-3" style={{ height: "35vh" }}>
                  {this.state.result ? (
                    this.renderResult(modelName)
                  ) : (
                    <img
                      src="/images/nopic.png"
                      alt="no pic"
                      style={{ height: "35vh" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
    return modelName ? ModelExe : NoMatch;
  }
}

export default PlayGround;
