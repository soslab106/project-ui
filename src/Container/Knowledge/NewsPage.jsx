import React, { Component } from 'react';
import NewsBlock from '../../Components/NewsBlock';
class NewsPage extends Component {
    render() {
        return (
            <div>
                <div className='d-flex justify-content-start w-75 ml-5'>
                    <h3 className='ml-5'>精選文章</h3>
                </div>
                <div className="container d-flex justify-content-around">
                    <NewsBlock>

                    </NewsBlock>
                    <NewsBlock>

                    </NewsBlock>
                    <NewsBlock>

                    </NewsBlock>
                </div>
                <div className='d-flex justify-content-start w-75 ml-5'>
                    <h3 className='ml-5'>工業</h3>
                </div>
                <div className="container d-flex justify-content-around">
                    <NewsBlock>

                    </NewsBlock>
                    <NewsBlock>

                    </NewsBlock>
                    <NewsBlock>

                    </NewsBlock>
                </div>
                <div className='d-flex justify-content-start w-75 ml-5'>
                    <h3 className='ml-5'>財經</h3>
                </div>
                <div className="container d-flex justify-content-around">
                    <NewsBlock>

                    </NewsBlock>
                    <NewsBlock>

                    </NewsBlock>
                    <NewsBlock>

                    </NewsBlock>
                </div>


            </div>
        );
    }
}

export default NewsPage;