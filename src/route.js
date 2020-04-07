import NeuralNetworkIntro from "./Container/NeuralNetworkIntro";
import Welcome from "./Container/Welcome";
import CNNIntro from "./Container/CNNIntro";
import Intro from "./Container/Intro";
import ImgClassification from "./Container/ImgClassification";

export const routes = [
  {
    path: "/nn-intro",
    component: NeuralNetworkIntro,
    exact: true
  },
  {
    path: "/",
    component: Welcome,
    exact: true
  },
  { path: "/CNN", component: CNNIntro, exact: false },
  { path: "/intro", component: Intro, exact: false },
  { path: "/img-classify", component: ImgClassification, exact: false },
];
