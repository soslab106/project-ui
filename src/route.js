import NeuralNetworkIntro from "./Container/NeuralNetworkIntro";
import WelcomeCopy from "./Container/WelcomeCopy";
import CNNIntro from "./Container/CNNIntro";
import Intro from "./Container/Intro";
import ImgClassification from "./Container/ImgClassification";
import Yolov3 from "./Container/Yolov3";
import FaceNet from "./Container/FaceNet";
import Login from "./Container/Login";
import SignUp from "./Container/SignUp";
import PlayGround from "./Container/PlayGround";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component }  from 'react';
import Vgg from "./Container/Vgg";
import ResNet from "./Container/ResNet";
import CNNDetail from "./Container/CNNDetail";
import FaceNetPlayground from "./Container/FaceNetPlayground";
import PlayGroundList from "./Container/PlayGroundList";
import Settings from "./Container/Settings";
import SignupNew from "./Container/SignupNew"
import SignIn from "./Container/SignIn";
import Menu from "./Container/Menu";
import TestingMenu from "./Container/TestingMenu";
import NewsPage from "./Container/NewsPage";
import ModelInfoList from "./Container/ModelInfoList";
import Profile from "./Container/Profile";

export function route() {
  return (
    <Router>
        <Switch>
          <Route exact path="/nn-intro" component={NeuralNetworkIntro} />
          <Route exact path="/" component={WelcomeCopy} />
          <Route path="/CNN" component={CNNIntro} />
          <Route path="/intro" component={Intro} />
          <Route path="/img-classify" component={ImgClassification} />
          <Route path="/YOLOV3" component={Yolov3} />
          <Route path="/FaceNet" component={FaceNet} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/vgg" component={Vgg} />
          <Route path="/resnet" component={ResNet} />
          <Route path="/cnn-detail" component={CNNDetail} />
          <Route path="/facenet-playground" component={FaceNetPlayground} />
          <Route path="/playground-list" component={PlayGroundList} />
          <Route path="/settings" component={Settings} />
          <Route path="/SignupNew" component={SignupNew} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Menu" component={Menu} />
          <Route path="/TestingMenu" component={TestingMenu} />
          <Route path="/NewsPage" component={NewsPage} />
          <Route path="/ModelInfoList" component={ModelInfoList} />
          <Route path="/Profile" component={Profile} />
          <Route path="/:model" component={PlayGround} />
        </Switch>
    </Router>
  );
}
