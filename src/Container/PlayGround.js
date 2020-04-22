import React, { Component } from "react";

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
          description: "yyyyyyyyyyoooooooooooollllllllllllooooooooo",
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
      <div className="container">
        No match for <code>{this.props.match.url}</code>
      </div>
    );
    const ModelExe = (
      <div className="container d-flex flex-column align-items-center">
        <div>{modelName}</div>
        <div className="d-flex">
          <div>
            <div>{description}</div>
            <div>{input}</div>
            <div>{output}</div>
            <div><button className="btn btn-previous">回到模型分類</button></div>
          </div>
          <div>
            <div>選檔案</div>
            <div>結果</div>
          </div>
        </div>
      </div>
    );
    return modelName ? ModelExe : NoMatch;
  }
}

export default PlayGround;
