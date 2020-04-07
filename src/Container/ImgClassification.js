import React, { Component } from 'react';
import ModelSelect from '../Components/ModelSelect'

class ImgClassification extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <h1 className='title mb-5'>圖像分類</h1>
                    <div className='text-center'>
                        2009年，普林斯頓大學助理教授AI研究員李菲菲組建了一個團隊，建立了ImageNet大型視覺資料庫，用於視覺目標辨識軟體研究。截至今日，該資料庫已手動標註了1400多萬張的圖像。ImageNet中包含了2萬多個典型類別，像是狗、貓、蘋果、草莓等等，每一類包含數百張圖像。
                    </div>
                    <div className='text-center my-4'>
                        ImageNet專案每年舉辦一次大規模的視覺辨識挑戰賽，辨識錯誤率最低的隊伍獲勝。直到現在，錯誤率越來越低，已經低於5%，ImageNet也開始朝向3D物件發展，將應用範圍增加到機器人導航、擴增實境上。在這些優秀的卷積神經網路模型內，我們挑選了兩個較廣為人知的模型進行介紹與操作，分別是VGG16與ResNet101。
                    </div>
                    <ModelSelect className="d-flex p-3 mt-3">
                        <div className='d-flex justify-content-center align-items-center'><h2>VGG</h2></div>
                        <div className='ml-4'>
                            <div>2014年分類亞軍(定位冠軍)VGGNet透過建立更多層的模型，達到了16及19個隱藏層。</div>
                            <button className="btn btn-model mt-4">前往VGG16介紹</button>

                        </div>

                    </ModelSelect>
                    <ModelSelect className="d-flex p-3 mt-5">
                        
                        <div className='mr-4'>
                            <div>2014年分類亞軍(定位冠軍)VGGNet透過建立更多層的模型，達到了16及19個隱藏層。</div>
                            <button className="btn btn-model mt-4">前往VGG16介紹</button>

                        </div>
                        <div className='d-flex justify-content-center align-items-center'><h2>VGG</h2></div>
                    </ModelSelect>
                </div>
            </React.Fragment>
        );
    }
}

export default ImgClassification;