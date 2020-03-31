import React, { Component } from '../../node_modules/react';
import TextAndImg from '../Components/TextAndImg';

class NeuralNetworkIntro extends Component {
    // this.state = {
    //     content:['深度學習是機器學習的一個分支，二者均為人工智慧領域的重要理論。其中，類神經網路是現今「深度學習」的主角之一。所謂的類神經網路就是模仿大腦運作的機器學習方式。',
    //             '人腦內的神經網路，主要是由神經元與突觸所組成。而神經網路是由一層層的神經元連接而成，每個階層之間的神經元都有著不同強度的鍵結，傳送資訊，進而完成思考判斷的功能，而類神經網路就是參照這樣的概念而誕生的。']
    // }
    render() {
        return (
            <div className='container'>
                <h1 className='title'>類神經網路</h1>
                <h2 className='title'>Artificial Neural Network</h2>
                <TextAndImg
                    textWidth='9'
                    imgWidth='3'
                    text='gijhfiosajriergtre'
                    imgPath='../../public/images/howAI-icon.png'
                />
            </div>
        );
    }
}

export default NeuralNetworkIntro;