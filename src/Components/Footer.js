import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-bottom footer navbar-fixed-bottom">
        <div className="container">
          <img
            src="/images/howAI icon2.svg"
            alt=" "
            style={{ width: "50px" }}
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
