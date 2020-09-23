import React, { Component } from "react";
import HomeInstances from "../../Components/HomeInstances";
import ArticleCard from "../../Components/ArticleCard";

class KnowledgeHome extends Component {
  render() {
    return (
      <>
        <HomeInstances
            title="知識補充站"
            description={<div className="mt-3">當你對人工智慧技術知識<br/>
            和專有名詞感到頭痛的時候，<br/>
            快探索網頁來緩解你的痛</div>}
            imgPath="/images/knowledge/knowledge.png"
        />
        <div className="py-5">
        <div className="secondary-title">基本知識</div>
            <ArticleCard
                imgPath='/images/intro_1.png'
                />
        </div>
      </>
    );
  }
}

export default KnowledgeHome;
