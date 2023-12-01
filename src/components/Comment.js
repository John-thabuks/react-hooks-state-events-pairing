import React from "react";

function Comment({ user, comment }) {
  return (
    <div>
      <p>{user}: {comment}</p>
    </div>
  );
}

export default Comment;