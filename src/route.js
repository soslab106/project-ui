import NeuralNetworkIntro from "./Container/NeuralNetworkIntro";
import Welcome from "./Container/Welcome";
import CNNIntro from "./Container/CNNIntro";

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
  { path: "/CNN", component: CNNIntro, exact: false }
];
