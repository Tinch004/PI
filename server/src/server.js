const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const { FRONTEND_URL } = process.env;

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(
  cors({
    origin: FRONTEND_URL,
  })
);

server.use(router);

module.exports = server;
