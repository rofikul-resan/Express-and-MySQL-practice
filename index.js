import express from "express";
import cors from "cors";
import path from "path";
import env from "dotenv";
import mysql from "mysql2";

// important variable
const port = process.env.PORT || 5000;
const __dirname = path.resolve();
env.config();

// create app in express server
const app = express();
app.use(cors());

// middleware
app.use(express.static("public"));
app.use(express.json());

// connect to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASS,
});

try {
  db.connect();
  console.log("Connected to database");
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// css send
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/style.css"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
