import React, { Component } from "react";
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <img src="../public/images/howAI-icon.png" style={{width:"50px"}}/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto align-items-center">
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="#">Service</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="#">Courses</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    
                    <li className="nav-item mr-3">
                        <button className="btn btn-personal" href="#" tabIndex="-1" aria-disabled="true">Personal Info</button>
                    </li>
                </ul>
                
            </div>
        </nav>
        
    );    
  }
}

export default NavBar;
