import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (

            <a href={this.props.link}>
                <div style={{ width: "200px", height: "200px" }}>{this.props.buttonText}</div>
            </a>

        );
    }
}

export default Square;
