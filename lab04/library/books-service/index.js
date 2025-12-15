const express = require("express");
const { sequelize, Book } = require("./models");
const { authenticate } = require("./auth");

const app = express();
const PORT = 3001;

app.use(express.json());

// Zwraca listę wszystkich książek
app.get("/api/books", async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// Zwraca dane konkretnej książki
app.get("/api/books/:bookId", async (req, res) => {
  const book = await Book.findByPk(req.params.bookId);
  if (!book) return res.json({ message: "Nie znaleziono książki" });
  res.json(book);
});

// Dodaje nową książkę (title, author, year) i zwraca jej id
app.post("/api/books", authenticate, async (req, res) => {
  const { title, author, year } = req.body;
  const book = await Book.create({ title, author, year });
  res.json({ id: book.id });
});

// Usuwa książkę o podanym id
app.delete("/api/books/:bookId", authenticate, async (req, res) => {
  const deleted = await Book.destroy({ where: { id: req.params.bookId } });
  if (!deleted) return res.json({ message: "Nie znaleziono książki" });
  res.end();
});

sequelize
  .sync()
  .then(() => {
    console.log("Baza books zsynchronizowana");
    app.listen(PORT, () => {
      console.log(`Books działa na porcie ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Błąd synchronizacji bazy:", err);
  });
