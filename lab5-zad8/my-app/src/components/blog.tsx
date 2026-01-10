import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
type Article = {
  id: number;
  title: string;
  content: string;
};

function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fromStorage = localStorage.getItem("articles");
    if (fromStorage) {
      const parsed: Article[] = JSON.parse(fromStorage);
      setArticles(parsed);
    }
  }, []);
  return (
    <div>
      <h1>Artykuły:</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/dodaj">Dodaj nowy artykuł</Link>
    </div>
  );
}

export default Blog;
