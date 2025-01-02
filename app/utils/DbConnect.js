// DbConnect.js
import mongoose from "mongoose";

const db = async () => {
  if (mongoose.connections[0].readyState) {
    return; // Already connected
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error: ", err);
  }
};

export default db;
