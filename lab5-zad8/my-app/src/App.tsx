import "./App.css";
import ArticleBody from "./components/article";
import Main from "./components/main";
import Blog from "./components/blog";
import AddArticle from "./components/addArticle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: "10px",
          borderBottom: "1px",
        }}
      >
        <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> |{" "}
        <Link to="/dodaj">Dodaj artykuł</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:id" element={<ArticleBody />} />
          <Route path="/dodaj" element={<AddArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
