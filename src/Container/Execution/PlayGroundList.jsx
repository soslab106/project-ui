import React, { Component } from 'react';
import FullWidthBlock from "../../Components/FullWidthBlock"

class PlayGroundList extends Component {
    render() {
        return (
            <div className="container expand-full d-flex flex-column ">          
                <div className="d-flex">
                    <div className="col-4">
                <h2 className="title mb-3 text-center p-3">操作模型選擇</h2>

                        <FullWidthBlock py="4" my="0">
                            <div className="d-flex flex-column align-items-center">
                                <div className="my-4">
                                    <h3 className="title">影像辨識</h3>
                                    <div className="d-flex flex-column">
                                        <a href="/vgg-playground"><button className="btn btn-ms my-2">VGG16</button></a>
                                        <a href="/resnet-playground"><button className="btn btn-ms my-2">ResNet101</button></a>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <h3 className="title">物體定位</h3>
                                    <div className="d-flex flex-column">
                                        <a href="/yolov3-playground"><button className="btn btn-ms my-2">Yolov3</button></a>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <h3 className="title">人臉辨識</h3>
                                    <div className="d-flex flex-column">
                                        <a href="/facenet-playground"><button className="btn btn-ms my-2">Face Recognition</button></a>
                                    </div>
                                </div>
                            </div>
                        </FullWidthBlock>
                    </div>
            <div className="col-8 p-5 ml-5">
                <img height="500" src="/images/model-select.png"/>
            </div> 
                </div>
            
        </div>
                    
                
            
        );
    }
}

export default PlayGroundList;