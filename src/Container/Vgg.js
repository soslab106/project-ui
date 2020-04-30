import React, { Component } from 'react';

class Vgg extends Component {
    render() {
        return (
            <div className='container d-flex'>
                <div className='col-8'>
                <h1 className='title'>VGG模型架構介紹</h1>
                <div className=''>
                VGG是英國牛津大學Visual Geometry Group的縮寫，他們共做了兩種深度的VGG模型，分別為VGG16及VGG19。
VGG使用了ImageNet提供的100萬張圖片，共1000種類別來做訓練，且進行了非常多層的處理，成功將準確率提高到了90%。
                </div>
                <div></div>
                </div>
                <div className='col-4'>
                    <img src=''/>
                </div>
            </div>
        );
    }
}

export default Vgg;