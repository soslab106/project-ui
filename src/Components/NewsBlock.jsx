import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class NewsBlock extends Component {
    render() {
        return (
            <div >
                <div className="container d-flex justify-content-around">
                    <div class="card" style={{ width: '18rem' }}>
                        <img src={this.props.imgpath} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 className='card-title'>{this.props.card_title}</h5>
                            <p class="card-text">{this.props.card_text}</p>
                            <Link to={{pathname: this.props.url}}><div class="btn btn-primary">詳全文</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsBlock;