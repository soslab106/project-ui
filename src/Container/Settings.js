import React, { Component } from 'react';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: localStorage.getItem('token') ? true : false,
            username: ''
          };
    }
    render() {
        return (
            <div className="container expand-full">
               Hylobates
            </div>
        );
    }
}

export default Settings;