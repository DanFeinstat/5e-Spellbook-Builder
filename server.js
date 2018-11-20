const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const routes = require("./routes/api");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3002;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});

// app.use(cors());

dotenv.config({ path: ".env" });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.use("/api", routes);

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/spellbook",
  { useNewUrlParser: true }
);

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
