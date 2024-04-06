import mongoose from "mongoose";

// -------- Agents  Schema Start Here --------//
const agentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    avatar: { type: String, default: "noAvatar.jpg" },
  },
  { timestamps: true }
);

export const Agents =
  mongoose.models?.Agents || mongoose.model("Agents", agentSchema);

// -------- Agents  Schema End Here --------//
