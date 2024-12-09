import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./router/productRouter.js";
import { connect } from "./config/dbConfig.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

// mongodb database connect
connect()

const port = process.env.PORT || 3000;

// Define your API routes
app.use("/api/product",productRouter);

// Define other routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
