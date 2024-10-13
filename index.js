import express from "express";
import cors from "cors";
import path from "path";

// important variable
const port = process.env.PORT || 5000;
const __dirname = path.resolve();

// create app in express server
const app = express();
app.use(cors());

// middleware
app.use(express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
