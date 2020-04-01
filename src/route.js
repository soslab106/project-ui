import NeuralNetworkIntro from "./Container/NeuralNetworkIntro";
import Welcome from "./Container/Welcome";

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
  }
];
