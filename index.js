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
app.use(express.static(path.join(__dirname, "client")));

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
  res.sendFile(path.join(__dirname + "/client/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
