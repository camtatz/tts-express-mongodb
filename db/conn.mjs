import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_ENDPOINT || "";
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.log('failed')
  console.error(e);
}

// Create a database named 'tts' or replace with your own.
let db = conn.db("tts");

export default db;