const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

// Hash password

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

//Compare passwords
function comparePassword(plainPassword, hashPassword) {
  return bcrypt.compareSync(plainPassword, hashPassword);
}

//Create JWT token
function generateToken(user) {
  const payload = { id: user.id, username: user.username };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}

//Verify JWT token
function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};
