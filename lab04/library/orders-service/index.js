// index.js
const express = require("express");
const axios = require("axios");
const { sequelize, Order } = require("./models");
const { authenticate } = require("./auth");

const app = express();
const PORT = 3002;

app.use(express.json());

// Zwraca listę zamówień użytkownika
app.get("/api/orders/:userId", async (req, res) => {
  const orders = await Order.findAll({
    where: { userId: req.params.userId },
  });
  res.json(orders);
});

// Dodaje zamówienie (userId, bookId, quantity) i zwraca id zamówienia. Sprawdź, czy bookId istnieje
app.post("/api/orders", authenticate, async (req, res) => {
  const { userId, bookId, quantity } = req.body;

  try {
    await axios.get(`http://localhost:3001/api/books/${bookId}`);
  } catch (error) {
    return res.json({ message: "Książka z tym id nie istnieje" });
  }
  const order = await Order.create({ userId, bookId, quantity });
  res.json({ id: order.id });
});

// Usuwa zamówienie
app.delete("/api/orders/:orderId", authenticate, async (req, res) => {
  const deleted = await Order.destroy({
    where: { id: req.params.orderId },
  });
  if (!deleted) return res.json({ message: "Zamówienie nie znalezione" });
  res.end();
});

// Aktualizuje wybrane dane zamówienia (np.ilość)
app.patch("/api/orders/:orderId", authenticate, async (req, res) => {
  const order = await Order.findByPk(req.params.orderId);
  if (!order) return res.json({ message: "Order not found" });

  const { userId, bookId, quantity } = req.body;
  if (userId !== undefined) order.userId = userId;
  if (bookId !== undefined) order.bookId = bookId;
  if (quantity !== undefined) order.quantity = quantity;

  await order.save();
  res.json(order);
});

sequelize
  .sync()
  .then(() => {
    console.log("Baza Orders zsynchronizowana");
    app.listen(PORT, () => {
      console.log(`Orders działa na porcie ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Błąd synchronizacji bazy:", err);
  });
