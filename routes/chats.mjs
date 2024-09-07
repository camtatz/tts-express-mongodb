import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
    res.json().status(200);
});

router.put("/new", async (req, res) => {
    let body = req.body
    let collection = await db.collection("chats");
    const doc = {
        user: body.steam_name,
        steam_id: body.steam_id,
        message: body.message,
        timestamp: new Date()
    };
    await collection.insertOne(doc)
    res.json().status(200);
});

export default router;