const express = require("express");
const db = require("./config/db");
const routes = require("./routes");

const app = express();

const port = 3001;

app.use("/api", routes);

db.sync({ force: false })
  .then(function () {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(console.error);
