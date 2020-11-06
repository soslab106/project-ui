import React, { Component } from "react";
import ArticleCard from "../../Components/ArticleCard"

class NewsTab extends Component {
  renderNews = () => {
    let tempNews = []; //this.props.News
    // console.log(Math.ceil(this.props.News.length / 3));
    console.log(this.props)
    for (let i = 0; i < Math.ceil(this.props.news.length / 3); i++) {
      // console.log(i);
      let children = this.props.news.slice(i * 3, i * 3 + 3);
      children = children.map((child) => (
        <ArticleCard
          title={child.title}
          imgPath={child.imgPath}
          date={child.date}
          desc={child.desc}
          newsId={child.id}
        />
      ));
      console.log(children.length);
      if (children.length === 2) {
        children.push(<ArticleCard visibility="hidden" />);
      }
      tempNews.push(
        <div className="mb-5 w-100 d-flex justify-content-between align-items-center">
          {children}
        </div>
      );
    }
    return (
      <div className='mt-5 w-100 d-flex flex-column justify-content-center align-items-center"'>
        {tempNews}
      </div>
    );
  };

  render() {
    return (
      <div className="pt-5 px-5 pb-3 news-tab">
        <div className='secondary-title'>{this.props.title}</div>
        {this.renderNews()}
      </div>
    );
  }
}

export default NewsTab;
