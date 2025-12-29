import { useEffect } from "react";
import { useState } from "react";
import Komentarz from "./komentarz";

interface User {
  id: number;
  username: string;
  fullName: string;
}

type Komentarz = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
};

function Komentarze() {
  const [komentarze, setKomentarze] = useState<Komentarz[]>([]);
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(`https://dummyjson.com/comments`);
        if (!response.ok) throw new Error("Błąd");
        const data = await response.json();
        setKomentarze(data.comments);
      } catch (err) {}
    }
    fetchComments();
  }, []);
  return (
    <div>
      {komentarze.map((komentarz) => (
        <Komentarz {...komentarz}></Komentarz>
      ))}
    </div>
  );
}

export default Komentarze;
