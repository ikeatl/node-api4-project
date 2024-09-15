const express = require("express");

const router = express.Router();
const { comparePassword, generateToken, hashPassword } = require("../utils/auth");
const protectRoute = require("../middleware/authMiddleware");
let users = [
  {
    id: 1,
    username: "johndoe",
    password: "hashedpassword123", // In reality, passwords should be hashed,
  },
  {
    id: 2,
    username: "janedoe",
    password: "hashedpassword456", // In reality, passwords should be hashed,
  },
];

function createUser(username, password) {
  return {
    id: users.length + 1,
    username,
    password,
  };
}

//Helper function: To find a user by username

function findUserByUsername(username) {
  return users.find((user) => user.username === username);
}

function findUserByUserId(user) {
  return users.find((user) => user.id === parseInt(id));
}

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const hashPassword = hashPassword(password);

  const newUser = { id: Date.now(), username, password: hashPassword };

  users.push(newUser);
  res.status(201).json({ id: newUser.id, username: newUser.username });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = find((u) => u.username === username);
  if (!user || !comparePassword(password, user.password)) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = generateToken(user);
  res.json({ message: "Login was suscessful", token });
});

router.get("/", protectRoute, (req, res) => {
  res.json({ users });
});

module.exports = router;
