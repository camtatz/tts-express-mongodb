import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_ENDPOINT || "";
console.log(connectionString)
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.log('failed')
  console.error(e);
}

let db = conn.db("tts");

export default db;