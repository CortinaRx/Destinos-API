const express = require("express");
const { connect } = require("./app/config/database");
const cors = require("cors");
const logger = require("morgan");

const countries = require("./app/api/routes/countries.routes");
const scenerys = require("./app/api/routes/scenerys.routes");

const app = express();
connect();

const PORT = 3000;

app.use(logger("dev"));

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4200"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.all("/", (req, res) => {
  res.send(`<h1>Welcome to Scenerys and Countries!</h1>
  <br />
  <img src="https://i.pinimg.com/originals/5c/dc/c5/5cdcc57dac7d5becf47d6fa8eed7b66a.gif" alt="Star Wars gif" width="300px" />
  <br />
  <h2>Endpoints:</h2>
  
  <a href="/countries">/countries</a>
  <br />
  <a href="/api/scenerys">/scenerys</a>
 `);
});
app.use("/scenerys", scenerys);
app.use("/countries", countries)

app.use((err, req, res, next) => {
  return res
    .status(err.status || 500)
    .json(err.message || "Do you feel a disturbance in the Force?");
});

app.disable("x-powered-by");

app.listen(PORT, () => {
  console.log(`Node server listening on port ${PORT}.`);
  console.log(`    __.-._
    '-._"7'
     /'.-c
     |  /T
_____)_/LI`);
});
