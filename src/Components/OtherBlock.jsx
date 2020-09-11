import React, { Component } from 'react';
// note:邊框修圓、圖片置中

class OtherBlock extends Component {
    render() {
        return (
            <div>
                <div className="container d-flex justify-content-around">
                    <div class="testing-list card d-flex justify-content-center align-items-center p-5" style={{ width: '18rem' }}>
                        <div><img src={this.props.imgpath} style={{ width: '10rem'}} class="card-img-top" /></div>
                        <div class="card-body d-flex justify-content-center" >
                            <h5 className='card-title'>{this.props.card_title}</h5>
                            <p class="card-text">{this.props.card_text}</p>
                        </div>
                        <div className="container d-flex justify-content-center mb-3">
                            <a href={this.props.url} class="btn btn-primary">{this.props.btnName}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OtherBlock;