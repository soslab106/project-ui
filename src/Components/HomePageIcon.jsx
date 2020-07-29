import React, { Component } from 'react';

class HomePageIcon extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imgpath}/>
                <h4 className='text-center' style={{color:"#50eaff"}}>{this.props.icontitle}</h4>
                <h6 className='text-center'>{this.props.iconsubtitle}</h6>
            </div>
        );
    }
}

export default HomePageIcon;