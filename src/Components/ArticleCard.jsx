import React, { Component } from 'react';

class ArticleCard extends Component {
    render() {
        return (
            <div className='card-select' style={{height:'300px'}}>
                <div className='article-card-img' style={{background: `url(${this.props.imgPath})`, height:'200px', backgroundSize: 'auto'}}></div>
            </div>
        );
    }
}

export default ArticleCard;