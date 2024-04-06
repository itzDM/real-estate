import mongoose from "mongoose";

// -------- User  Schema Start Here --------//
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true,trim:true },
    email: { type: String, required: true, unique: true ,trim:true },
    password: { type: String, required: true, select: false ,trim:true },
    avatar: { type: String, default: "noAvatar.jpg" },
    type: {
      enum: ["user", "admin", "agent"],
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export const Users =
  mongoose.models?.Users || mongoose.model("User", userSchema);

// -------- User  Schema End Here --------//
