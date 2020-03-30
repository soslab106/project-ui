import React, { Component } from './node_modules/react';
import TextAndImg from '../Components/TextAndImg';

class NeuralNetworkIntro extends Component {
    render() {
        return (
            <div className='container'>
                <h1>類神經網路</h1>
                <h2>Artificial Neural Network</h2>
                <TextAndImg
                    textWidth='9'
                    imgWidth='3'
                    text='gijhfiosajriergtre'
                    imgPath='../../public/logo192.png'
                />
            </div>
        );
    }
}

export default NeuralNetworkIntro;