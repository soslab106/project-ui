import React, { Component } from 'react';
import OtherBlock from '../Components/OtherBlock';
class ModelInfoList extends Component {
    render() {
        return (
            <div>
                <div className='expand-full flex-column d-flex justify-content-center align-items-center '>
                <div>
                    <h3 className="d-flex justify-content-center">
                        本網站所提供的當代人工智慧模型架構資訊
                    </h3>
                </div>
                <div className="d-flex  justify-content-center mt-5">
                    <OtherBlock
                        imgpath='/images/retina.png'
                        card_text='使用2014年ImageNet競賽圖像分類亞軍：VGGNet'
                        btnName='影像辨識'
                        url='/vgg'
                    ></OtherBlock>
                   
                    <OtherBlock
                        imgpath='/images/yolo.png'
                        card_text='採用目前最被廣泛應用的
                        物件偵測演算：YOLOV3'
                        btnName='物體定位'
                        url='/Yolov3'></OtherBlock>
                   
                    <OtherBlock
                        imgpath='/images/face.png'
                        card_text='使用Google 2015年提出的人臉辨識系統：Facenet'
                        btnName='人臉辨識'
                        url='/FaceNet'></OtherBlock>
                  
                    <OtherBlock
                        imgpath='/images/cycleGan.png'
                        card_text='採用無需成對示例的非監督訓練模型：CycleGAN'
                        btnName='風格轉換'
                        url='/'></OtherBlock>
                </div>
            </div>
            </div>
        );
    }
}

export default ModelInfoList;