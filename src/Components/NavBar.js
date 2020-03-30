import React, { Component } from "react";
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <img src="/images/howAI-icon.png" style={{width:"50px"}}/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto align-items-center">
                    <li class="nav-item mr-3">
                        <a class="nav-link" href="#">Service</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link" href="#">Courses</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    
                    <li class="nav-item mr-3">
                        <button class="btn btn-personal" href="#" tabindex="-1" aria-disabled="true">Personal Info</button>
                    </li>
                </ul>
                
            </div>
        </nav>
        
    );    
  }
}

export default NavBar;
