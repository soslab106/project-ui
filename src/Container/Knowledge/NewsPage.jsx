import React, { Component } from "react";
import { medicalLabel, industryLabel } from "./News";

function NewsPage() {
  function handleNews(news) {
    const page = [];
    // for (let i = 0; i < news.length; i++) {
    Object.values(news).forEach((each) => {
      const key = Object.keys(each)[0];
      const value = Object.values(each);
      console.log(key, value);
      switch (key) {
        case "title":
          page.push(
            <div className="d-flex justify-content-start">
              <div className="main-title">{value[0]}</div>
            </div>
          );
          break;
        case "author":
          page.push(
            <div>
              By: {value[0][0]} <a href={value[0][1]}>原文出處</a>
            </div>
          );
          break;
        case "content":
          page.push(<div className="my-2">{value[0]}</div>);
          break;
        case "picture":
          page.push(
            <div className="d-flex flex-column align-items-center justify-content-center my-3">
              <img className="news-img" src={value[0]} />
              <span className="news-img-discription d-flex justify-content-center">
                {value[0][1]}
              </span>
            </div>
          );
          break;
        case "contenttitle":
          page.push(<div className="news-secondary-title">{value[0]}</div>);
          break;
        default:
          break;
      }
    });
    // }
    return page;
  }

  return (
    <div>
      <div className="d-flex flex-column container my-5">
        {handleNews(industryLabel[2])}
        <a href="/">
          <button className="btn-main my-4">回首頁</button>
        </a>
      </div>
    </div>
  );
}

export default NewsPage;
