import { useState } from "react";
import "./komentarz.css";
interface User {
  id: number;
  username: string;
  fullName: string;
}

type KomentarzProps = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
};

function Komentarz({ id, body, postId, likes, user }: KomentarzProps) {
  const [likesCount, setLikesCount] = useState(likes);

  return (
    <div className="comment">
      <div className="comment-header">
        <div>Odpowiedź do: {postId}</div>
        <div>
          <b> {user.fullName}</b> @{user.username}
        </div>
      </div>
      <div className="comment-body">{body}</div>
      <button
        className="comment-like"
        onClick={() => setLikesCount((prev) => prev + 1)}
      >
        🗿
      </button>
      <button
        className="comment-like"
        onClick={() => setLikesCount((prev) => prev - 1)}
      >
        ❌
      </button>
      {likesCount}
    </div>
  );
}

export default Komentarz;
