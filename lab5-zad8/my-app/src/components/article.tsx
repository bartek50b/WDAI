import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ArticleBody() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fromStorage = localStorage.getItem("articles");
    const parsedArticles: Article[] = fromStorage
      ? JSON.parse(fromStorage)
      : [];

    const numericId = parseInt(id ?? "");
    const found = parsedArticles.find((a) => a.id === numericId) || null;

    setArticle(found);
  }, [id]);

  if (!article) {
    return (
      <div>
        <h1>Nie ma takiego artykułu</h1>
        <Link to="/blog">Powrót do blogu</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <br />
      <Link to="/blog">Powrót do blogu</Link>
    </div>
  );
}

type Article = {
  id: number;
  title: string;
  content: string;
};
export default ArticleBody;
