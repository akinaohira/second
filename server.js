const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 9000;
const db = require("./knex");

// create path for static file
app.use("/", express.static(path.resolve(__dirname, "build")));

// litening port
app.listen(port, () => {
  console.log(`App is listning PORT ${port}`);
});
