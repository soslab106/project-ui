import React, { Component } from 'react';

class ResNet extends Component {
    render() {
        return (
            <div className='container'>
                <div className= 'd-flex'>
                    <div className=''>
                        <h1 className='title my-5'>ResNet模型架構介紹</h1>
                        <div className='my-3'>
                            <p>經過之前VGG的結果，科學家們開始思考深度學習是不是越深就能產生越好的結果呢? 因此他們做了一個測試，卻發現56層的網路錯誤率卻比20層的還要高!</p>
                        </div>
                        <div className="my-3">
                            <img src='/images/RN_1.png'/>
                            <p>圖片來源:https://arxiv.org/pdf/1512.03385.pdf</p>
                        </div>
                        <div className='my-3'>
                            <p>於是經過實驗後發現，網路過深的話，會變得更加難以訓練。原因在於，我們訓練時，會透過計算預測結果與真實結果的差距來調整權重的參數，而更新參數的方法是利用偏微分來求取斜率(或稱調整的梯度)，一步步調整參數以達到最佳的效果，而這個調整是由深層往淺層進行(反向傳遞)，因此當網路過深時，這個梯度就會在傳遞的過程中慢慢消失，而無法對前面網路層的參數進行有效的更新。此時，ResNet就出現了。</p>
                        </div>
                        <div className='my-3'>
                            <p>ResNet全稱Residual Nerual Network 殘差神經網路，而ResNet的主要突破就是一個稱為Residual Block的架構:</p>
                        </div>
                        <div className="my-3">
                            <img src='/images/RN_2.png'/>
                            <p>圖片來源:圖片來源:https://arxiv.org/pdf/1512.03385.pdf</p>
                        </div>
                        <div className='my-3'>
                            <p>除了原本的主架構，另外還多了一個捷徑，當我們的模型學習到一個比較飽和的準確率時，我們透過這個捷徑，來讓該層的輸入值近似於輸出值，這樣就能保持後面的層數比較不會造成準確率下降的情況。</p>
                            <p>如此一來，我們就能加深網路的層數，且不會產生準確率反而下降的情況。</p>
                            <p>下圖是各種深度的ResNet的結構圖，之後很多的深度學習模型都是建立在ResNet50和ResNet101的基礎上完成的，因此我們選擇提供ResNet101作為範例。</p>
                        </div>
                        <div className="my-3">
                            <img src='/images/RN_3.png'/>
                            <p>圖片來源:圖片來源:https://arxiv.org/pdf/1512.03385.pdf</p>
                        </div>
                    

                    </div>
                </div>
                    <div className="d-flex align-items-center">
                        <a href="/resnet-playground"><button className="btn btn-model m-3">前往ResNet101操作</button></a>
                        <a href="/img-classify"><button className="btn btn-previous m-3">回到圖像分類介紹</button></a>
                    </div>
            </div>
        );
    }
}

export default ResNet;