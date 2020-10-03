import React, { Component } from "react";
import CardSelect from "../../Components/CardSelect";
import HomeInstances from "../../Components/HomeInstances";

class ModelInfoList extends Component {
  render() {
    return (
      <>
        <HomeInstances
          title="執行模型"
          description={
            <div className="mt-3">
              想知道當代模型具有那些功能，
              <br />
              並且有哪些結果嗎，
              <br />
              快來體驗看看吧！
            </div>
          }
          imgPath="/images/execute/exe.png"
        />

        <div className="mt-5 flex-column d-flex justify-content-center align-items-center container">
          <div className="d-flex secondary-title">模型操作選單</div>
          <div className="w-100 d-flex justify-content-between align-items-center my-5">
            <CardSelect
              imgpath="/images/execute/retina.png"
              iconsubtitle="使用2014年ImageNet競賽圖像分類亞軍：VGGNet"
              icontitle="影像辨識"
              url="/vgg"
              btnName="開始！"
            />

            <CardSelect
              imgpath="/images/execute/yolo.png"
              iconsubtitle="採用目前最被廣泛應用的
                        物件偵測演算：YOLOV3"
              icontitle="物體定位"
              url="/Yolov3"
              btnName="開始！"
            />

            <CardSelect
              imgpath="/images/execute/face.png"
              iconsubtitle="使用Google 2015年提出的人臉辨識系統：Facenet"
              icontitle="人臉辨識"
              url="/FaceNet"
              btnName="開始！"
            />

            <CardSelect
              imgpath="/images/execute/cycleGan.png"
              iconsubtitle="採用無需成對示例的非監督訓練模型：CycleGAN"
              icontitle="風格轉換"
              url="/cyclegan-playground"
              btnName="開始！"
            />
          </div>

          {/* 操作教學 */}
          <div className="mt-5">
            <div className="secondary-title">操作教學</div>
          </div>
        </div>
      </>
    );
  }
}

export default ModelInfoList;
