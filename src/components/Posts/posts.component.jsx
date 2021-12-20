import React from "react";
import "./posts.styles.css";

const Posts = ({ postID, postTitle, postBody }) => {
  return (
    <div className="row p-3">
      <div id={postID}>
        <div className="card">
          <div className="card-header card-title p-2">
            <h5>{postTitle}</h5>
          </div>
          <div className="card-body">{postBody}</div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
