const express = require("express");
const path = require("path");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

// Sirve los archivos estáticos desde la carpeta raíz
server.use(express.static(path.join(__dirname)));

// Configura una ruta para todas las demás solicitudes, sirviendo el archivo index.html
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
