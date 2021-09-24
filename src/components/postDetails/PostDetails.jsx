import React from "react";

function PostDetails() {
  return (
    <div className="post-details">
      <span className="post-details__author">John Doe</span>
      <div className="post-details__categories">
        <span className="post-details__category">Technology</span>
        <span className="post-details__category">Coding</span>
      </div>

      <time className="post-details__date" dateTime="">
        2 hours ago
      </time>
    </div>
  );
}

export default PostDetails;
