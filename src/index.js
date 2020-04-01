import React from "react";
import ReactDOM from "react-dom";
import { routes } from "./route";
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from "react-router-dom";

// import App from './Components/App'
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

ReactDOM.render(
  <BrowserRouter>
      <NavBar />
      {renderRoutes(routes)}
      <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(<Main />, document.getElementById('root'));
