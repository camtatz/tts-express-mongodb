import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
    res.json().status(200);
});

router.put("/dump", async (req, res) => {
    let collection = await db.collection("users");
    for (const [key, value] of Object.entries(req.body)) {
        await collection.replaceOne({ _id: key }, {_id: key, blob: value, lastUpdate: new Date()}, {upsert: true})
    }
    res.json().status(200);
});

router.get("/all", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.json(results)
});

router.delete("/:id", async (req, res) => {
    const query = { _id: req.params.id };
  
    const collection = db.collection("users");
    let result = await collection.deleteOne(query);
  
    res.json(result).status(200);
  });
  
  router.patch("/:id", async (req, res) => {
    const query = { _id: req.params.id };
    const updates = {
      $push: { comments: req.body }
    };
  
    let collection = await db.collection("users");
    let result = await collection.updateOne(query, updates);
  
    res.json(result).status(200);
  });

export default router;