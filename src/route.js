import NeuralNetworkIntro from "./Container/Knowledge/NeuralNetworkIntro";
import Welcome from "./Container/WelcomeCopy";
import CNNIntro from "./Container/Knowledge/CNNIntro";
import Intro from "./Container/Knowledge/Intro";
import ImgClassification from "./Container/Execution/ImgClassification";
import Yolov3 from "./Container/Knowledge/Yolov3";
import FaceNet from "./Container/Knowledge/FaceNet";
import PlayGround from "./Container/Execution/PlayGround";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Vgg from "./Container/Knowledge/Vgg";
import ResNet from "./Container/Knowledge/ResNet";
import CNNDetail from "./Container/Knowledge/CNNDetail";
import FaceNetPlayground from "./Container/Execution/FaceNetPlayground";
import PlayGroundList from "./Container/Execution/PlayGroundList";
import Settings from "./Container/Settings";
import SignupNew from "./Container/SignupNew";
import SignIn from "./Container/SignIn";
import Menu from "./Container/Knowledge/Menu";
import TestingMenu from "./Container/TestingMenu";
import NewsPage from "./Container/Knowledge/NewsPage";
import ModelInfoList from "./Container/Execution/ModelInfoList";
import CycleganPlayground from "./Container/Execution/CycleganPlayground";
import Profile from "./Container/Profile";
import CustomHome from "./Container/CustomModel/CustomHome";
import PersonalModelView from "./Container/CustomModel/PersonalModelView";
import KnowledgeHome from "./Container/Knowledge/KnowledgeHome";
import ForumHome from "./Container/Forum/ForumHome";
import Finish from "./Container/CustomModel/Finish";
import NewModel from "./Container/CustomModel/NewModel";
import Trainning from "./Container/CustomModel/Trainning";
import LabelandImage from "./Container/CustomModel/LabelandImage";
import ForumAll from "./Container/Forum/ForumAll";

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
        <Route path="/vgg" component={Vgg} />
        <Route path="/resnet" component={ResNet} />
        <Route path="/cnn-detail" component={CNNDetail} />
        <Route path="/facenet-playground" component={FaceNetPlayground} />
        <Route path="/playground-list" component={PlayGroundList} />
        <Route path="/settings" component={Settings} />
        <Route path="/Signup" component={SignupNew} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/Menu" component={Menu} />
        <Route path="/TestingMenu" component={TestingMenu} />
        <Route path="/NewsPage" component={NewsPage} />
        <Route path="/ModelInfoList" component={ModelInfoList} />
        <Route path="/Profile" component={Profile} />
        <Route path="/custom" component={CustomHome} />
        <Route path="/personal-model-list" component={PersonalModelView} />
        <Route path="/knowledge" component={KnowledgeHome} />
        <Route path="/forum" component={ForumHome} />
        <Route path="/forum-all" component={ForumAll} />
        <Route path="/cp-:model" component={CycleganPlayground} />
        <Route path="/finish" component={Finish} />
        <Route path="/new-model" component={NewModel} />
        <Route path="/trainning" component={Trainning} />
        <Route path="/labelandImage" component={LabelandImage} />
        <Route path="/:model" component={PlayGround} />
      </Switch>
    </Router>
  );
}
