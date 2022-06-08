import express from "express";
import bodyParser from "body-parser";
import racersRoutes from "./routes/racers.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/api/racers", racersRoutes);

app.get("/", (req, res) => {
  res.send("I am rooooot");
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
