import React, { Component } from 'react';

class ThumbNail extends Component {
    render() {
        return (
            <div className='thumbnail p-4 m-3 w-50'>
                <h4 className="title">{this.props.title}</h4>
                <img className='my-4' src={this.props.imgPath}/>
                <div>{this.props.content}</div>
            </div>
        );
    }
}

export default ThumbNail;