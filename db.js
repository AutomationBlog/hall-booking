import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoServer = process.env.MONGODB_URL;
const localServer = process.env.LOCAL_URL;

async function dbConnection() {
  let client;
  try {
    if (process.env.isLOCAL === "true") {
      client = new MongoClient(localServer);
    } else {
      client = new MongoClient(mongoServer);
    }
    await client.connect();
    console.log("DataBase Connected");
    return client;
  } catch (err) {
    console.log(`Error Connecting Server: ${err}`);
  }
}

// Initializing DB
export const client = await dbConnection();
