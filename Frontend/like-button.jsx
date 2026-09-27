import React, { useState } from "react";
import classNames from "classnames";

export default function LikeButton() {
  const [likes, setLikes] = useState(100);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (liked) {
      setLikes((count) => count - 1);
      setLiked(false);
    } else {
      setLikes((count) => count + 1);
      setLiked(true);
    }
  };

  return (
    <button
      type="button"
      className={classNames("like-button", { liked })}
      onClick={handleClick}
    >
      Like | <span className="likes-counter">{likes}</span>
    </button>
  );
}
