import mongoose from "mongoose";

// -------- Post Schema Start Here --------//
const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String },
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    rooms: { type: Number, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true, trim: true },
    likes: { type: Array, default: [] },
    longitude: { type: String, required: true },
    latitude: { type: String, required: true },
  },
  { timestamps: true }
);

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);

// -------- Post Schema End Here --------//
