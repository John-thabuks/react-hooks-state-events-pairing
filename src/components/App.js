import React, { useState } from "react";
import VideoDetails from "./VideoDetails";
import CommentList from "./CommentList";
import ToggleCommentsButton from "./ToggleCommentsButton";
import CommentSearch from "./CommentSearch";
import video from "../data/video";


function App() {
  const [showComments, setShowComments] = useState(true);
  const [votes, setVotes] = useState({ upvotes: video.upvotes, downvotes: video.downvotes });
  const [filteredComments, setFilteredComments] = useState(video.comments);

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const handleVote = (type) => {
    setVotes(prevVotes => ({ ...prevVotes, [type]: prevVotes[type] + 1 }));
  };

  const handleCommentSearch = (searchTerm) => {
    const filtered = video.comments.filter((comment) =>
      comment.user.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComments(filtered);
  };

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <VideoDetails
        title={video.title}
        views={video.views}
        upvotes={votes.upvotes}
        downvotes={votes.downvotes}
      />
      <div>
        <button onClick={() => handleVote('upvotes')}>👍</button>
        <button onClick={() => handleVote('downvotes')}>👎</button>
      </div>
      <ToggleCommentsButton
        onClick={handleToggleComments}
        showComments={showComments}
      />
      <CommentSearch onSearch={handleCommentSearch} />
      {showComments && <CommentList comments={filteredComments} handleVote={handleVote} />}
    </div>
  );
}

export default App;
