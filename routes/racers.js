import express from "express";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

uuidv4();

const router = express.Router();
const __dirname = path.resolve();
let racers = [];

fs.readFile(path.join(__dirname + "/data/racers.json"), (error, data) => {
  if (null != data && data != "") {
    racers = JSON.parse(data);
  }
});

//all routes in this file are based from url.com/racers
router.get("/", (req, res) => {
  res.send(racers);
});

router.post("/", (req, res) => {
  let newRacer = req.body;
  newRacer.id = uuidv4();
  racers.push(newRacer);
  res.send(`Racer ${newRacer.firstName} ${newRacer.lastName} added`);
});

router.get("/:id", (req, res) => {
  const reqId = req.params.id;
  const foundRacer = racers.find((racer) => racer.id === reqId);
  res.send(foundRacer);
});

router.delete("/:id", (req, res) => {
  const reqId = req.params.id;
  racers = racers.filter((racer) => racer.id != reqId);
  res.send("Deleted racer");
});

export default router;
