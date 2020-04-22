import React from "react";
import ReactDOM from "react-dom";
import { route } from "./route";

// import App from './Components/App'
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const routes = route();

ReactDOM.render(
  <React.Fragment>
    <NavBar />
    {routes}
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);

// ReactDOM.render(<Main />, document.getElementById('root'));
