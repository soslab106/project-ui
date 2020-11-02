import React, { Component } from "react";
import CardSelect from "../../Components/CardSelect";
import HomeInstances from "../../Components/HomeInstances";

class Execution extends Component {
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
              url="/cp-vgg"
              btnName="開始！"
            />

            <CardSelect
              imgpath="/images/execute/yolo.png"
              iconsubtitle="採用目前最被廣泛應用的
                        物件偵測演算：YOLOV3"
              icontitle="物體定位"
              url="/cp-yolo"
              btnName="開始！"
            />

            <CardSelect
              imgpath="/images/execute/cycleGan.png"
              iconsubtitle="採用無需成對示例的非監督訓練模型：CycleGAN"
              icontitle="風格轉換"
              url="/cp-cyclegan"
              btnName="開始！"
            />
            <CardSelect
              imgpath="/images/execute/face.png"
              iconsubtitle="使用Google 2015年提出的人臉辨識系統：Facenet"
              icontitle="人臉辨識"
              url="/cp-facenet"
              btnName="開始！"
            />
          </div>
        </div>

        {/* 操作教學 */}
        <div className="pt-5 w-100">
          <div className="secondary-title mb-5">輸出範例</div>
          <div className="container d-flex justify-content-between align-items-center pb-5">
            <div className="exec-func-info d-flex flex-column box justify-content-center align-items-center">
              <img src="/images/execute/retina.png" width="120" />
              <div className="third-title mt-20" style={{ color: "#F6F8F8" }}>
                影像辨識 - VGG16
              </div>
            </div>
            <div>
              <img src="/images/execute/vgg-info.png" width="700" />
            </div>
          </div>

          <div className="panel">
            <div className="container d-flex justify-content-between align-items-center py-5">
              <div className="exec-func-info d-flex flex-column box justify-content-center align-items-center">
                <img src="/images/execute/yolo.png" width="120" />
                <div className="third-title mt-20" style={{ color: "#F6F8F8" }}>
                  物體定位 - YOLOv3
                </div>
              </div>
              <div>
                <img src="/images/execute/yolo-info.png" width="748" />
              </div>
            </div>
          </div>

          <div className="container d-flex justify-content-between align-items-center py-5">
            <div className="exec-func-info d-flex flex-column box justify-content-center align-items-center">
              <img src="/images/execute/cycleGan.png" width="120" />
              <div className="third-title mt-20" style={{ color: "#F6F8F8" }}>
                風格轉換 - CycleGAN
              </div>
            </div>
            <div>
              <img src="/images/execute/cyclegan-info.png" width="748" />
            </div>
          </div>

          <div className="panel">
            <div className="container d-flex justify-content-between align-items-center py-5">
              <div className="exec-func-info d-flex flex-column box justify-content-center align-items-center">
                <img src="/images/execute/face.png" width="120" />
                <div className="third-title mt-20" style={{ color: "#F6F8F8" }}>
                  人臉辨識 - FaceNet
                </div>
              </div>
              <div>
                <img src="/images/execute/facenet-info.png" width="748" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Execution;
