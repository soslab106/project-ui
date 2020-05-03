import NeuralNetworkIntro from "./Container/NeuralNetworkIntro";
import Welcome from "./Container/Welcome";
import CNNIntro from "./Container/CNNIntro";
import Intro from "./Container/Intro";
import ImgClassification from "./Container/ImgClassification";
import Yolov3 from "./Container/Yolov3";
import FaceNet from "./Container/FaceNet";
import Login from "./Container/Login";
import SiginUp from "./Container/SiginUp";
import PlayGround from "./Container/PlayGround";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component }  from 'react';
import Vgg from "./Container/Vgg";
import ResNet from "./Container/ResNet";
import CNNDetail from "./Container/CNNDetail";
import FaceNetPlayground from "./Container/FaceNetPlayground";
import PlayGroundList from "./Container/PlayGroundList";

export function route() {
  return (
    <Router>
        <Switch>
          <Route exact path="/nn-intro" component={NeuralNetworkIntro} />
          <Route exact path="/" component={Welcome} />
          <Route path="/CNN" component={CNNIntro} />
          <Route path="/intro" component={Intro} />
          <Route path="/img-classify" component={ImgClassification} />
          <Route path="/YOLOV3" component={Yolov3} />
          <Route path="/FaceNet" component={FaceNet} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SiginUp} />
          <Route path="/vgg" component={Vgg} />
          <Route path="/resnet" component={ResNet} />
          <Route path="/cnn-detail" component={CNNDetail} />
          <Route path="/facenet-playground" component={FaceNetPlayground} />
          <Route path="/playground-list" component={PlayGroundList} />

          
          <Route path="/:model" component={PlayGround} />

        </Switch>
    </Router>
  );
}
