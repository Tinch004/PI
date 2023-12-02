const express = require("express");
const path = require("path");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const history = require("connect-history-api-fallback");

const { FRONTEND_URL } = process.env;

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(
  cors({
    origin: FRONTEND_URL,
  })
);

// Configura el middleware de reescritura de historial antes de tus rutas
server.use(history());

server.use(router);

// Sirve los archivos estáticos desde la carpeta "client" que está un nivel atrás del "server"
server.use(express.static(path.join(__dirname, "..", "client")));

// Configura una ruta para todas las demás solicitudes, sirviendo el archivo index.html
server.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "..", "client", "index.html"));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
