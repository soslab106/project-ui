import React, { Component } from "react";
import TextAndImg from "../Components/TextAndImg";

class Yolov3 extends Component {
  state = {
    yolov3_1: [
      "Yolo系列是關於物件偵測(Objectdetection)的類神經網路演算法，特色是輕量、依賴少、演算法高效率，能夠快速判斷圖形內的物體位置與類別，在工業應用領域很有價值，例如行人偵測、工業影像偵測。AI影像辨識廣泛運用在治安、交通、醫療、國防、娛樂等多元場域。",
      "右圖是YOLOV3的結構圖",
    ],
    yolov3_2: [
      "YoloV3可以達成輕量化的特點是採用了DarkNet53，DarkNet53有 53 層神經網路，以及採用ResNet，隨著特徵萃取的網路層數不斷加深，圖片的資訊量也會隨之減少，也因此資訊量越少的小物件，容易在深層的網路中被漏掉，因此在DarkNet中不同深度的層數內分別進行定位跟分類，進行不同scale的定位跟分類，最後再將結果加起來，成為output結果。",
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container d-flex flex-column align-items-center expand-full">
          <h1 className="title mb-3">YOLOV3模型介紹</h1>
          <div>
            <TextAndImg
              my="5"
              textWidth="9"
              imgWidth="3"
              textList={this.state.yolov3_1}
              imgPath="/images/howAI icon2.svg"
              imgPos="right"
            />
          </div>

          <div className="my-3">
            <p className="bgc">{this.state.yolov3_2}</p>
          </div>

          <div>
            <a href="/intro" className="mx-2">
              <button className="btn btn-previous">回到圖像分類介紹</button>
            </a>
            <a href="/yolov3-playground" className="mx-2">
              <button className="btn btn-main">前往YOLOV3操作</button>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Yolov3;
