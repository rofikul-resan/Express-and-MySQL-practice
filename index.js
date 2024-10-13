import express from "express";
import cors from "cors";

// important variable
const port = process.env.PORT || 5000;

// create app in express server
const app = express();
app.use(cors());
