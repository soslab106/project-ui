import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Welcome from "../Container/Welcome";

class App extends Component {
  render() {
    return (
      <div style={{ background: "#363636", height: "96vh" }}>
        <NavBar />
        <Welcome />
        <Footer />
      </div>
    );
  }
}

export default App;
