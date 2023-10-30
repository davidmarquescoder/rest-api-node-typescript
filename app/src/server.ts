import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  app.use(cors());
  next();
});

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("📌 Server started on port 3333 👌");
});
