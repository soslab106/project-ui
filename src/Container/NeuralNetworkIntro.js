import React, { Component } from "../../node_modules/react";
import TextAndImg from "../Components/TextAndImg";
import FullWidthBlock from "../Components/FullWidthBlock";

class NeuralNetworkIntro extends Component {
  state = {
    nn_content_1: [
      "深度學習是機器學習的一個分支，二者均為人工智慧領域的重要理論。其中，類神經網路是現今「深度學習」的主角之一。所謂的類神經網路就是模仿大腦運作的機器學習方式。",
      "人腦內的神經網路，主要是由神經元與突觸所組成。而神經網路是由一層層的神經元連接而成，每個階層之間的神經元都有著不同強度的鍵結，傳送資訊，進而完成思考判斷的功能，而類神經網路就是參照這樣的概念而誕生的。"
    ],
    nn_content_2: [
      "典型的類神經網路架構如右圖，可分為輸入層(Input layer，輸入的變數)、隱藏層(Hidden layer)以及輸出層(Output layer，要預測的變數)。而其中的隱藏層可以有1層以上，2層以上隱藏層的神經網路，通常會被泛稱為「深度神經網路(Deep Neural Network)」。"
    ],
    nn_content_3: [
      "簡單來說，每個神經元內都會設定一個函數，也就是隱藏層中的節點，轉換成數學式來看，就是我們時常看到的迴歸函式。",
      "當我們對神經元進行輸入(Xi)後，對輸入的權重(Wi)加乘，再加上偏差(b)後，便完成了該節點的計算，接下來我們將數值丟入激勵函數中(Activation Function)，以便規範輸出數值的範圍及相互關係，以上便是一個神經元內的運算過程。傳給下一個神經元。直到最後一層的輸出層，產生預測結果。",
      "此外，類神經網路會由預測結果和真實結果之間的差距，對整個神經網路進行更新，更改權重的參數設定，以達到「學習」的效果。",
      "經過不斷的運算和更新(也稱為訓練)，就能讓預測的結果愈來愈準確。隨著隱藏層的加深，加大神經網路的規模，也讓預測能力更好更準確，這也是類神經網路，被稱為「人工智慧」與「深度學習」的原因。"
    ],
    af_content: [
      "激勵函數並不複雜，就是一個輸入X得出Y的算式，我們經由激勵函數的計算，就能將前面所得的數值根據我們的需求進行處理。",
      "以最簡單又常用的ReLU(Rectified Linear Units)舉例，這個函數將負數轉為0，正數則不做改變。用意就是把負值關係排除，在進入下一個神經元運算時，就能簡單的表示，這筆資料是有數值參考的，還是毫無相關的等等，根據需求能有不同的用途與解釋。",
      "適當的選擇或設計激勵函數，就能讓我們在訓練模型時更加的方便，產生自己想要的結果。"
    ]
  };

  mapTextList = textlist =>
    textlist.map(text => {
      return <div className="mb-3">{text}</div>;
    });

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="title col-12">類神經網路</h1>
          <h2 className="title col-12">Artificial Neural Network</h2>
          <TextAndImg
            my="5"
            textWidth="9"
            imgWidth="3"
            textList={this.state.nn_content_1}
            imgPath="../../public/images/howAI-icon.png"
            imgPos="right"
          />
          <TextAndImg
            my="5"
            textWidth="6"
            imgWidth="6"
            textList={this.state.nn_content_2}
            imgPath="../../public/images/howAI-icon.png"
            imgPos="right"
          />
          <div className="col-12">
            {this.mapTextList(this.state.nn_content_3)}
          </div>
          <img className="col-6" src="../../public/images/howAI-icon.png" />
        </div>
        <FullWidthBlock py='4' my='4'>
          <h2 className="title col-12">激勵函數 Activation Function</h2>
          <TextAndImg
            my="4"
            textWidth="8"
            imgWidth="4"
            textList={this.state.af_content}
            imgPath="../../public/images/howAI-icon.png"
            imgPos="right"
          />
        </FullWidthBlock>
        <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-previous">回到人工智慧簡介</button>
        </div>
      </React.Fragment>
    );
  }
}

export default NeuralNetworkIntro;
