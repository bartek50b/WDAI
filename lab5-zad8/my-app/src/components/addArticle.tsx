import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Article from "./article";
type Article = {
  id: number;
  title: string;
  content: string;
};

function AddArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Wypełnij wszystkie pola");
      return;
    }

    const storageData = localStorage.getItem("articles");

    const articles: Article[] = storageData ? JSON.parse(storageData) : [];

    const newId =
      articles.length > 0 ? Math.max(...articles.map((a) => a.id)) + 1 : 1;

    const newArticle: Article = {
      id: newId,
      title: title,
      content: content,
    };

    articles.push(newArticle);

    localStorage.setItem("articles", JSON.stringify(articles));

    navigate("/blog");
  };

  return (
    <div>
      <h1>Dodaj Nowy Artykuł</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Tytuł:
            <br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Treść:
            <br />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
            />
          </label>
        </div>
        <button type="submit">DODAJ</button>
      </form>
      <br />
      <Link to="/blog">Anuluj</Link>
    </div>
  );
}

export default AddArticle;
