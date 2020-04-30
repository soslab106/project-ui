import React, { Component } from 'react';

class VggPage extends Component {
    render() {
        return (
            <div className="container d-flex">
                <div className="col-9 flex-column">
                    <h1 className='title my-5'>VGG模型架構介紹</h1>
                    <div className="">
                        VGG是英國牛津大學Visual Geometry Group的縮寫，他們共做了兩種深度的VGG模型，分別為VGG16及VGG19。
                        VGG使用了ImageNet提供的100萬張圖片，共1000種類別來做訓練，且進行了非常多層的處理，成功將準確率提高到了90%。
                    </div>
                    <div className='mt-4'>
                        從右圖可知，VGG16的架構包含13個卷積層、5個池化層、3個全連接層。
                        其中，因為卷積層和全連接層具有權重係數(池化層是沒有的)，因此也被稱為權重層，總數目為13+3=16，故稱為VGG16。
                    </div>
                    <button className="btn btn-model mt-4">前往VGG16操作</button>
                    <button className="btn btn-previous mt-2">回到圖像分類介紹</button>
                </div>
                <div className="col-3"><img src="logo192.png" /></div>
            </div>
        );
    }
}

export default VggPage;