import React from "react";

function VideoDetails({ title, views, upvotes, downvotes }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{views} views</p>
      <p>Upvotes: {upvotes} | Downvotes: {downvotes}</p>
    </div>
  );
}

export default VideoDetails;