import React, { Component } from '../../node_modules/react';
import TextAndImg from '../Components/TextAndImg';

class NeuralNetworkIntro extends Component {
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