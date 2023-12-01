import React from "react";

function ToggleCommentsButton({ onClick, showComments }) {
  return (
    <button onClick={onClick}>
      {showComments ? "Hide Comments" : "Show Comments"}
    </button>
  );
}

export default ToggleCommentsButton;