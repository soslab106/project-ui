import React, { Component } from 'react';

class ThumbNail extends Component {
    render() {
        return (
            <div className='thumbnail box p-4 m-3 w-50'>
                <div className="info-title">{this.props.title}</div>
                <img className='my-4' src={this.props.imgPath} width={this.props.imgWidth} height={this.props.imgHeight}/>
                <div>{this.props.content}</div>
            </div>
        );
    }
}

export default ThumbNail;