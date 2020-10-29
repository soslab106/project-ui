import React, { Component } from "react";

class ForumPost extends Component {
  render() {
    return (
      <div className="content-color py-4 px-5">
        <div className="forumpost">
          <h2 className="post-title">
            <a>Title</a>
          </h2>
          <p className="post-content my-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            error optio voluptatum aspernatur alias nisi eaque fugiat ea dolorum
            totam? Quis numquam sit at debitis corporis. Beatae corrupti
            voluptatem asperiores.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda error optio voluptatum aspernatur alias
            nisi eaque fugiat ea dolorum totam? Quis numquam sit at debitis
            corporis. Beatae corrupti voluptatem asperiores.
          </p>
        </div>
      </div>
    );
  }
}

export default ForumPost;
