require("dotenv").config();
const cors = require("cors");
const express = require("express");

const usersRouter = require("./routes/users-router");

const server = express();

const port = process.env.PORT || 4000;

server.use(
  cors({
    origin: "http://localhost:3000",
  })
);
server.use("/api/users", usersRouter);
server.use("/", (req, res) => res.send("API Ike is up and running!"));

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
