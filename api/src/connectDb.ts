import { connect } from "mongoose";

let isConnected = false;

export const connectDb = async () => {
  try {
    if (isConnected === true) return;
    const db = await connect(process.env.MONGO_URI!);
    isConnected = true;
    console.log(`DataBase is Connect with ${db.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};