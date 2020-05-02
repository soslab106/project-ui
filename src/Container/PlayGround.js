import React, { Component } from "react";
import axios from "axios"

class PlayGround extends Component {
  state = {
    modelName: "",
    description: "",
    input: "",
    output: "",
    result: "",
    api: "",
  };

  componentDidMount() {
    const modelParam = this.props.match.params.model;
    switch (modelParam) {
      case "yolov3-playground":
        this.setState({
          modelName: "YOLOv3",
          description: "yyyyyyyyyyowdwwdwdwwfrertetertertertdwd",
          input: "iiiiiiiiiiinnnnnnnnnpppuuuttt",
          output: "output",
          file: undefined,
          api: "http://127.0.0.1:8000/upload/",
        });
        break;
      case "vgg-playground":
        this.setState({
          modelName: "VGG16",
          description: "VGGGGGGGGGGGG",
          input: "iiiiiiiiiiinnnnnnnnnpppuuuttt",
          output: "output",
          file: undefined,
          api: "http://127.0.0.1:8000/upload/",
        });
        break;
      case "resnet-playground":
        this.setState({
          modelName: "ResNet101",
          description: "RRRRRRRRRREEEEEEEEESSSSSSSSNNNN",
          input: "iiiiiiiiiiinnnnnnnnnpppuuuttt",
          output: "output",
          file: undefined,
          api: "http://127.0.0.1:8000/upload/",
        });
        break;
      default:
        this.setState({ modelName: "" });
    }
  }

  handleFileChange = (e) => {
    this.setState({file: e.target.files[0]})
  }

  getAPI = () => {
    let { api, modelName, file } = this.state;
    let formData = new FormData()
    formData.append('modelName',modelName)
    formData.append('file',file)


    axios.post(api, formData,{
      headers: {
      'content-type': 'multipart/form-data'
      }
    })
    .then((res) => { console.log(res.data) })
    .catch((error) => { console.error(error) })
  };

  render() {
    const { modelName, description, input, output } = this.state;
    const NoMatch = (
      <div className="container expand-full">
        No match for <code>{this.props.match.url}</code>
      </div>
    );
    const ModelExe = (
      <div className="d-flex flex-column align-items-center">
        <h1 className="title">{modelName}</h1>
        <div className="container d-flex mt-5">
          <div className="col-4">
            <div>
              <div className="description">{description}</div>
              <div className="io-box">{input}</div>
              <div className="io-box">{output}</div>
            </div>

            <div className="mt-5">
              <a href="/img-classify">
                <button className="btn btn-previous">回到模型分類</button>
              </a>
            </div>
          </div>
          <div className="col-8 mt-3">
            <div className="d-flex justify-content-between">
              <input type="file" className="file-label" name="input" onChange={this.handleFileChange}/>
              <button type="button" className="btn btn-main ml-2" onClick={this.getAPI}>
                執行
              </button>
            </div>
            <div
              className="io-box mb-5"
              style={{ marginTop: "20px", height: "80vh" }}
            >
              <div>輸入</div>
              <div width="50%" height="35vh" overflow="auto">
              <img src={this.state.file?URL.createObjectURL(this.state.file):''} alt='no pic' style={{ marginTop: "10px", height: "35vh"}} />
              </div>
              <div>結果</div>

            </div>
          </div>
        </div>
      </div>
    );
    return modelName ? ModelExe : NoMatch;
  }
}

export default PlayGround;
