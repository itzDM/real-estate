import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDb } from "./connectDb";
import agentRoutes from "./routes/agentRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

dotenv.config();

connectDb();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/agent", agentRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
