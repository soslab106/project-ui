import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer py-1 h-100">
        <div className="container my-3">
          <img
            src="/images/howAI icon2.svg"
            alt=" "
            style={{ width: "50px" }}
          />
          <a
            href="https://www.freepik.com/free-photos-vectors/banner"
            className="ml-5"
            style={{ color: "#686868" }}
          >
            Banner vector created by fullvector - www.freepik.com
          </a>


          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

        </div>
      </footer>
    );
  }
}

export default Footer;