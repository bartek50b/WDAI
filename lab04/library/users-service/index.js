const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sequelize, User } = require("./models");

const app = express();
const PORT = 3003;

const JWT_SECRET = "secret";

app.use(express.json());

// Rejestracja nowego użytkownika (email, password). Zwraca id użytkownika.
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  const existing = await User.findOne({ where: { email } });
  if (existing) {
    return res.json({ message: "Konto z tym emailem już istnieje" });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({ email, password: hashed });
  res.json({ id: user.id });
});

// Logowanie użytkownika (email + password). Zwraca JWT token
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.json({ message: "Konto z tym emailem nie istnieje" });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.json({ message: "Złe hasło" });
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
    expiresIn: "2h",
  });

  res.json({ token });
});

sequelize
  .sync()
  .then(() => {
    console.log("Baza Users zsynchronizowana");
    app.listen(PORT, () => {
      console.log(`Users działa na porcie ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Błąd synchronizacji bazy:", err);
  });
