import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
    res.json().status(200);
});

router.put("/new", async (req, res) => {
    let collection = await db.collection("chats");
    const doc = { user: value.steam_name, steam_id: value._steam_id, message: value.message };
    await collection.insertOne(doc)
    res.json().status(200);
});

export default router;