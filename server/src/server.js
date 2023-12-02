const express = require("express");
const path = require("path");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const history = require("connect-history-api-fallback");

// ... (otras importaciones)
const { FRONTEND_URL } = process.env;

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(
  cors({
    origin: FRONTEND_URL,
  })
);

server.use(history());

// Sirve los archivos estáticos desde la carpeta "dist" de la carpeta "client"
server.use(express.static(path.join(__dirname, "..", "client", "dist")));

server.use(router);

server.get("*", (req, res) => {
  // Si no encuentra un archivo estático, sirve el archivo index.html
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
