import React, { Component } from 'react';

class MenuImg extends Component {
    render() {
        return (
            <div className='d-flex flex-row justify-content-start align-items-center w-100'>
                <div >
                    <img src={this.props.imgpath} />

                </div>
                <div className='ml-5 w-100'>
                    <h3 className='text-center' style={{ color: "#50eaff" }}>{this.props.icontitle}</h3>
                    <div className='text-start'>{this.props.iconsubtitle}</div>
                    <div className='text-start'>{this.props.iconsubtitle1}</div>
                    <div>{this.props.iconsubtitle2}</div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default MenuImg;