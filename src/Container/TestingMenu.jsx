import React, { Component } from 'react';

class TestingMenu extends Component {
    render() {
        return (
            <div className='expand-full'>
                <div className='d-flex flex-row'>
                    <div className='d-flex flex-column align-items-center justify-content-center border border-primary text-center ' style={{ width: "300px", height: "500px" }}>
                        <h3>模型選擇</h3>
                        <div className=''>
                            <button className="btn btn-lg btn-main mt-3">CNN</button>
                            <button className=" btn btn-lg btn-main mt-3">CycleGan</button>
                            <button className=" btn btn-lg btn-main mt-3">Advasarial</button></div>
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-center border border-primary text-center ' style={{ width: "300px", height: "500px" }}>
                        <h3>CNN</h3>
                        <button className="btn btn-lg btn-main mt-3">影像辨識</button> 
                        {/* 使用2014年ImageNet競賽圖像分類亞軍：VGG16 */}
                        <button className="btn btn-lg btn-main mt-3">物體定位</button>
                        {/* 採用目前最被廣泛應用的物件偵測演算：YOLO */}
                        <button className="btn btn-lg btn-main mt-3">臉部辨識</button>
                        {/* 使用Google 2015年提出的人臉辨識系統：Facenet */}
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-center border border-primary text-center ' style={{ width: "300px", height: "500px" }}>
                        <h3>CycleGan</h3>
                        <button className="btn btn-lg btn-main mt-3">風格轉換</button>
                          {/* 體驗看看著名的風格轉換模型CycleGAN吧！把真人的人臉變成辛普森風格 */}
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-center border border-primary text-center ' style={{ width: "300px", height: "500px" }}>
                        <h3>攻擊目標</h3>
                        <button className="btn btn-lg btn-main mt-3">影像辨識</button>
                        {/* 看看我們可以怎麼騙過影像辨識模型「VGG」吧 */}
                        <button className="btn btn-lg btn-main mt-3">物體定位</button>
                          {/* 看看我們可以怎麼騙過影像辨識模型「YOLO」吧 */}
                        <button className="btn btn-lg btn-main mt-3">臉部辨識</button>
                        {/* 看看我們可以怎麼騙過影像辨識模型「FaceNet」吧 */}
                    </div>
                </div>
            </div>
        );
    }
}

export default TestingMenu;