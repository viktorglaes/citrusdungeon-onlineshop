const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

//init app
const app = express();

//middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(cors());

app.use(passport.initialize());

require("./config/passport")(passport);

//setup static dir
app.use(express.static(path.join(__dirname, " public")));

//bring in database config
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Database connected successfully on ${db}`);
  })
  .catch((err) => console.log(`Unable to connect db ${err}`));

const products = require("./routes/api/products");
app.use("/api/products", products);

//bring in users route
const users = require("./routes/api/users");
app.use("/api/users", users);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
