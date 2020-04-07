import NeuralNetworkIntro from "./Container/NeuralNetworkIntro";
import Welcome from "./Container/Welcome";
import CNNIntro from "./Container/CNNIntro";
import Intro from "./Container/Intro";
import ImgClassification from "./Container/ImgClassification";
import Yolov3 from "./Container/Yolov3";
import FaceNet from "./Container/FaceNet";

export const routes = [
  {
    path: "/nn-intro",
    component: NeuralNetworkIntro,
    exact: true,
  },
  {
    path: "/",
    component: Welcome,
    exact: true,
  },
  { path: "/CNN", component: CNNIntro, exact: false },
  { path: "/intro", component: Intro, exact: false },
  { path: "/img-classify", component: ImgClassification, exact: false },
  { path: "/YOLOV3", component: Yolov3, exact: false },
  { path: "/FaceNet", component: FaceNet, exact: false },
];
