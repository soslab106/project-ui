import React, { Component } from "react";
import FullWidthBlock from "../Components/FullWidthBlock";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

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
          api: "jowijrtig/apiwowo",
        });
        break;
      case "vgg-playground":
        this.setState({
          modelName: "VGG",
          description: "VGGGGGGGGGGGG",
          input: "iiiiiiiiiiinnnnnnnnnpppuuuttt",
          output: "output",
          api: "jowijrtig/apiwowo",
        });
        break;
        case "resnet-playground":
          this.setState({
            modelName: "ResNet",
            description: "RRRRRRRRRREEEEEEEEESSSSSSSSNNNN",
            input: "iiiiiiiiiiinnnnnnnnnpppuuuttt",
            output: "output",
            api: "jowijrtig/apiwowo",
          });
          break;
      default:
        this.setState({ modelName: "" });
    }
  }

  render() {
    const { modelName, description, input, output } = this.state;
    const NoMatch = (
      <div className="container expand-full">
        No match for <code>{this.props.match.url}</code>
      </div>
    );
    const ModelExe = (
      <div className="d-flex flex-column align-items-center expand-full">
        <h1 className='title'>{modelName}</h1>
        <div className="container d-flex mt-5">
          <div className="col-4">
            <div>
              <div className="description">{description}</div>
              <div className="io-box">{input}</div>
              <div className="io-box">{output}</div>
            </div>

            <div className='mt-5'>
                <a href="/img-classify"><button className="btn btn-previous">回到模型分類</button></a>
            </div>
          </div>
          <div className="col-8 mt-3">
            <div className="d-flex justify-content-between">
              <input type="file" className="file-label" />
              <button type="button" className="btn btn-main ml-2">
                執行
              </button>
            </div>
            <div className="io-box" style={{marginTop:'20px', height:'42.75vh'}}>結果</div>
          </div>
        </div>
      </div>
    );
    return modelName ? ModelExe : NoMatch;
  }
}

export default PlayGround;
