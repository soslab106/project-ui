import React, { Component } from "react";
import FullWidthBlock from "../../Components/FullWidthBlock";
import ForumPost from "../../Components/ForumPost";

class Forum extends Component {
  render() {
    return ( <>
      <FullWidthBlock className="py-5">
        <div className="d-flex justify-content-between">
          <div>
            <div className="secondary-title text-left">論壇</div>
            <div className="content-color">
              人工智慧知識交流問答區
              <br />
              與各方高手互相切磋討論吧！
            </div>
          </div>
          <div>
            <img src="/images/forum/forum.png" height="120" />
          </div>
        </div>
      </FullWidthBlock>
      <div className="py-5">
        <div className="container d-flex h-100">
          <div className="col-3">
            <div className="box d-flex flex-column justify-content-start align-items-start mx-3 h-100">
              <div className="my-3 ml-3">
                <div className="third-title">校版</div>
                <div className="boards w-100">
                  <div className="my-1">政治大學</div>
                  <div className="my-1">台灣大學</div>
                  <div className="my-1">大葉大學</div>
                  <div className="my-1">其他校版</div>
                </div>
              </div>
              <div className="my-3 ml-3">
                <div className="third-title">領域版</div>
                <div className="boards w-100">
                  <div className="my-1">金融</div>
                  <div className="my-1">工業</div>
                  <div className="my-1">醫療</div>
                  <div className="my-1">物聯網</div>
                  <div className="my-1">申請其他領域</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="box d-flex flex-column mx-3 h-100 forum-post-list">
              <ForumPost />
              <ForumPost />
              <ForumPost />
              <ForumPost />
              <ForumPost />
              <ForumPost />
              <ForumPost />
              <ForumPost />
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default Forum;
