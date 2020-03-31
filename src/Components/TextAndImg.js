import React, { Component } from 'react';

class TextAndImg extends Component {
    render() {
        return (
            <div className='d-flex'>
                <div className={'col-'+this.props.textWidth}>{this.props.text}</div>
                <div className={'col-'+this.props.imgWidth}><img alt=" " src={this.props.imgPath}/></div>
            </div>
        );
    }
}

export default TextAndImg;