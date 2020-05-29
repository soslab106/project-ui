import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar container navbar-expand-lg navbar-light p-2 mb-5">
        <a href="/">
          <img
            alt="123"
            src="/images/howAI icon2.svg"
            style={{ width: "50px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center">
            {/* <li className="nav-item mr-3">
              <a className="nav-link" href="# ">
                Service
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="/intro">
                Tutorials
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="# ">
                About Us
              </a>
            </li>
*/}
            <li className="nav-item mr-3">
              HowAI Lab
              {/*this.props.login?<a href="/login"><button className="btn btn-personal" href="# ">
                Personal Info
              </button></a>:<a href="/login"><button className="btn btn-personal" href="# ">
                Log In
              </button></a>*/}
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
