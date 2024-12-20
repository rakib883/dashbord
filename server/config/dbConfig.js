import mongoose from "mongoose";
import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();

// Connection function
export const connect = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
