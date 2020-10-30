import React, { Component } from "react";
import axios from "axios";

class FaceNetPlayground extends Component {
  state = {
    modelName: "FaceNet",
    description: "可辨識出已經過訓練學習的人臉並標上名字",
    input:
      "於訓練圖片中上傳人臉的照片(請更改檔名)，在欲辨識圖片中上傳你要辨識的照片(含多人)",
    output: "辨識照片中的人臉，框出位置，並標上圖片檔名",
    train: undefined,
    test: undefined,
    api: "http://140.119.19.99:8000/upload/multi/",
    previousURL: "/facenet/",
    showModal: false,
    loading: false,
  };

  handleTrainChange = (e) => {
    this.setState({ train: e.target.files });
  };

  handleTestChange = (e) => {
    this.setState({ test: e.target.files[0] });
  };

  getAPI = () => {
    if (this.state.train && this.state.test) {
      this.setState({ loading: true });

      let { api, train, test } = this.state;
      let formData = new FormData();
      console.log(train);
      for (const key of Object.keys(train)) {
        formData.append("train", train[key]);
      }
    
      formData.append("test", test);
      console.log(test);
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      
      axios
        .post(api, formData, {
          headers: {
            "content-type": "multipart/form-data",
            "Authorization": `JWT ${localStorage.getItem('token').toString()}`,
          },
        })
        .then((res) => {
          console.log(res.status);
          let { data } = res;
          console.log(data);
          this.setState({ result: data.result });
        })
        .then(() => {
          this.setState({ loading: false });
        })
        .catch((error) => {
          console.log(error.response.headers);
          alert("連線逾時或檔名有誤，即將重整頁面");
          window.location.reload();
        });
    } else {
      alert("請先選擇照片!");
    }
  };

  renderSelected = () => {
    return (
      <img
        src={URL.createObjectURL(this.state.test)}
        style={{ height: "35vh" }}
      />
    );
  };

  renderResult = (modelName) => {
    switch (modelName) {
      case "FaceNet":
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
      test,

      result,
      showModal,
      loading,
    } = this.state;

    const loadingPage = (
      <div className="loading d-flex flex-column align-items-center justify-content-center">
        <img src="/images/Loading_2.gif" width="50" />
        <div className="mt-3">Loading...</div>
      </div>
    );

    const NoMatch = (
      <div className="container expand-full">
        找不到此網頁: <code>{this.props.match.url}</code>
      </div>
    );

    const ModelExe = (
      <React.Fragment>
        {loading ? loadingPage : ""}
        <div className="d-flex flex-column align-items-center">
          <h1 className="title">{modelName}</h1>
          <div className="container d-flex mt-5">
            <div className="col-4">
              <div>
                <div className="description d-flex flex-column justify-content-around align-items-center">
                  <div>{description}</div>
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

              <div className="mt-5 d-flex justify-content-center">
                <a href="/img-classify">
                  <button className="btn btn-previous">回到模型分類</button>
                </a>
              </div>
            </div>
            <div className="col-8 mt-3">
              <div className="d-flex justify-content-between my-2">
                <table width="1000">
                  <tr>
                    <td height="50px">
                      <label>目標人臉圖片: </label>
                    </td>
                    <td height="50px">
                      <input
                        type="file"
                        className="file-label"
                        name="train"
                        onChange={this.handleTrainChange}
                        style={{ width: "350px" }}
                        multiple
                      />
                    </td>
                  </tr>
                  <tr>
                    <td height="50px">
                      <label>欲辨識圖片: </label>
                    </td>
                    <td height="50px">
                      <input
                        type="file"
                        className="file-label"
                        name="test"
                        onChange={this.handleTestChange}
                        style={{ width: "350px" }}
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
                  {test ? (
                    this.renderSelected()
                  ) : (
                    <img src="/images/nopic.png" style={{ height: "35vh" }} />
                  )}
                </div>
                <h5>輸出</h5>
                <div className="m-3 mb-3" style={{ height: "35vh" }}>
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
            </div>
          </div>
        </div>
      </React.Fragment>
    );
    // if(!localStorage.getItem('token')&&this.state.modelName){
    //   alert('請先登入再進行測試呦!')
    //   window.location.href = '/signin'
    // }

    return modelName ? ModelExe : NoMatch;
  }
}

export default FaceNetPlayground;
