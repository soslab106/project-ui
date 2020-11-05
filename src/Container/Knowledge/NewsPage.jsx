import React, { Component } from "react";
import NewsBlock from "../../Components/NewsBlock";
class NewsPage extends Component {
  render(props) {
    return (
      <div>
        <div className="d-flex justify-content-start w-75 ml-5">
          <h3 className="ml-5">精選文章</h3>
        </div>
      </div>
    );
  }
}

export default NewsPage;
