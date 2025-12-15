const jwt = require("jsonwebtoken");

const JWT_SECRET = "secret";

function authenticate(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.json({ message: "Nie podano tokenu" });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.json({ message: "Podano zły token" });
  }
}

module.exports = { authenticate, JWT_SECRET };
