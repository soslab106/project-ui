import React, { Component } from 'react';

class NewsTheme extends Component {
    constructor(props){
        super(props)
        this.hangleClick = this.hangleClick.bind(this)
    }

    hangleClick() {
        this.props.onClick(this.props.title);
    }

    render() {
        return (
            <div id={this.props.title} onClick={this.hangleClick} className='explore-theme d-flex flex-column justify-content-between align-items-center'>
                <img className='category-icon pointer' src={this.props.imgPath} width="80" />
                <span className='mt-2 pointer'>{this.props.title}</span>
                <div className='triangle mt-3 hidden'></div>
            </div>
        );
    }
}

export default NewsTheme;