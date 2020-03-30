import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <img src="/images/howAI icon2.svg" style={{ width: "50px" }} />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto align-items-center">
              <li class="nav-item mr-3">
                <a class="nav-link" href="#">
                  Service
                </a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="#">
                  Courses
                </a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item mr-3">
                <button className="btn btn-personal" href="#" tabIndex="-1">
                  Personal Info
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
