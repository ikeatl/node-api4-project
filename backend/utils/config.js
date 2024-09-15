require("dotenv").config();

module.exprts = {
  JWT_SECRET: process.env.JWT_SECRET || "default_jwt_secret",
};
