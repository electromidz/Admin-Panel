import mongoose from "mongoose";
export const connectDB = async () => {
  const connection: any = {};
  try {
    if (connection.isConnected) return;
    const db: any = await mongoose.connect("mongodb://0.0.0.0:27017/admin");
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    console.log(error);
    throw new Error("ERROR ON DB::\n", error);
  }
};
