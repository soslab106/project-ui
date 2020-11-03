import NeuralNetworkIntro from "./Container/Knowledge/NeuralNetworkIntro";
import Welcome from "./Container/WelcomeCopy";
import CNNIntro from "./Container/Knowledge/CNNIntro";
import Intro from "./Container/Knowledge/Intro";
import ImgClassification from "./Container/Execution/ImgClassification";
import Yolov3 from "./Container/Knowledge/Yolov3";
import FaceNet from "./Container/Knowledge/FaceNet";
import NoMatch from "./Container/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Vgg from "./Container/Knowledge/Vgg";
import ResNet from "./Container/Knowledge/ResNet";
import CNNDetail from "./Container/Knowledge/CNNDetail";
import FaceNetPlayground from "./Container/Execution/FaceNetPlayground";
import PlayGroundList from "./Container/Execution/PlayGroundList";
import SignupNew from "./Container/SignupNew";
import SignIn from "./Container/SignIn";
import Menu from "./Container/Knowledge/Menu";
import TestingMenu from "./Container/TestingMenu";
import NewsPage from "./Container/Knowledge/NewsPage";
import Execution from "./Container/Execution/Execution";
import CPlayground from "./Container/Execution/CPlayground";
import Profile from "./Container/Profile";
import CustomHome from "./Container/CustomModel/CustomHome";
import PersonalModelView from "./Container/CustomModel/PersonalModelView";
import KnowledgeHome from "./Container/Knowledge/KnowledgeHome";
import Forum from "./Container/Forum/Forum";
import Finish from "./Container/CustomModel/Finish";
import NewModel from "./Container/CustomModel/NewModel";
import Trainning from "./Container/CustomModel/Trainning";
import LabelandImage from "./Container/CustomModel/LabelandImage";
import ForumAll from "./Container/Forum/ForumAll";
import Exam from "./Container/Knowledge/Exam";

export function route() {
  return (
    <Router>
      <Switch>
        {/* home page and setting pages etc */}
        <Route exact path="/" component={Welcome} />
        <Route path="/signup" component={SignupNew} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={Profile} />
        {/* Execution page */}
        <Route path="/execution" component={Execution} />
        <Route path="/cp-:model" component={CPlayground} />
        {/* Custom page */}
        <Route path="/custom" component={CustomHome} />
        <Route path="/personal-model-list" component={PersonalModelView} />
        <Route path="/finish" component={Finish} />
        <Route path="/new-model" component={NewModel} />
        <Route path="/trainning" component={Trainning} />
        <Route path="/labelandImage" component={LabelandImage} />
        {/* Knowledge page */}
        <Route path="/knowledge" component={KnowledgeHome} />
        <Route exact path="/nn-intro" component={NeuralNetworkIntro} />
        <Route path="/intro" component={Intro} />
        <Route path="/YOLOV3" component={Yolov3} />
        <Route path="/exam" component={Exam} />
        {/* Forum page */}
        <Route path="/forum" component={Forum} />

        {/* 可用/尚未改完 */}
        <Route path="/cnn-detail" component={CNNDetail} />

        {/* hackmd內容比較好 */}
        <Route path="/FaceNet" component={FaceNet} />

        {/* 刪掉 */}
        <Route path="/CNN" component={CNNIntro} />
        <Route path="/img-classify" component={ImgClassification} />
        <Route path="/vgg" component={Vgg} />
        <Route path="/resnet" component={ResNet} />
        <Route path="/playground-list" component={PlayGroundList} />
        <Route path="/NewsPage" component={NewsPage} />
        <Route path="/Menu" component={Menu} />
        <Route path="/TestingMenu" component={TestingMenu} />
        <Route path="/facenet-playground" component={FaceNetPlayground} /> 

        <Route path="/:model" component={NoMatch} />
      </Switch>
    </Router>
  );
}
