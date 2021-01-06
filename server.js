const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");
const routes = require("./routes");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs({ helpers, defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
