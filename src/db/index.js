import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONOGO_URI);
    console.log("✅ Connection DB successful");
  } catch (error) {
    console.log("❌ connection failed", error);
  }
};

export default connectDB;
