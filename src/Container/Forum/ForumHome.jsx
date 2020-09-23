import React, { Component } from "react";
import FullWidthBlock from "../../Components/FullWidthBlock";

class ForumHome extends Component {
  render() {
    return (
      <>
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
            

        </div>
      </>
    );
  }
}

export default ForumHome;
