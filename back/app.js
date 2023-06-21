const express = require("express");
const db = require("./config/db");
const routes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const port = 3001;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/", routes);

// Manejo de errores global
app.use((err, req, res, next) => {
  // Manejo de errores
  res.status(500).json({ error: "Internal Server Error" });

  // Loggeo de errores
  console.error(err);
});

db.sync({ force: false })
  .then(function () {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(console.error);
