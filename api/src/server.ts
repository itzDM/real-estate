import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./connectDb";
import agentRoutes from "./routes/agentRoutes";

const app = express();

dotenv.config();

connectDb();

app.use(express.json());

app.use("/api/v1/agent", agentRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
