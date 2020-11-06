import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { medicalLabel, industryLabel, financeLabel } from "./News";

function NewsPage() {
  let location = useLocation();
  const eventKey = location.state.eventKey;
  const newsId = location.state.newsId;

  function handleCat() {
    switch (eventKey) {
      case "med":
        return handleNews(medicalLabel[newsId]);
      case "finance":
        return handleNews(financeLabel[newsId]);
      case "industry":
        return handleNews(industryLabel[newsId]);
      case "iot":
        return handleNews(medicalLabel[newsId]);
      default:
        break;
    }
  }

  function handleNews(news) {
    const page = [];
    for (let i = 0; i < news.length; i++) {
      // console.log(news[i]);
      // Object.values(news[i]).forEach((each) => {
      const key = Object.keys(news[i])[0];
      const value = Object.values(news[i])[0];
      switch (key) {
        case "title":
          page.push(
            <div className="d-flex justify-content-start">
              <div className="main-title">{value}</div>
            </div>
          );
          break;
        case "author":
          page.push(
            <div>
              By: {value[0]} <a href={value[1]}>原文出處</a>
            </div>
          );
          break;
        case "content":
          page.push(<div className="my-2">{value}</div>);
          break;
        case "picture":
          page.push(
            <div className="d-flex flex-column align-items-center justify-content-center my-3">
              <img className="news-img" src={value[0]} />
              <span className="news-img-discription d-flex justify-content-center">
                {value[1]}
              </span>
            </div>
          );
          break;
        case "contenttitle":
          page.push(<div className="news-secondary-title">{value}</div>);
          break;
        default:
          break;
      }
      // });
    }
    return page;
  }

  return (
    <div>
      <div className="d-flex flex-column container my-5">
        {handleCat()}
        <a href="/">
          <button className="btn-main my-4">回首頁</button>
        </a>
      </div>
    </div>
  );
}

export default NewsPage;
