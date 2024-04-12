import { Request, Response } from "express";
import { Post } from "../models/postModels";
import { populate } from "dotenv";

export const createPost = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    if (req.tokenData.type === "user")
      return res.status(401).json({ error: "You are Not  Allow" });
    await new Post({ ...data, agentId: req.tokenData.userId }).save();
    return res.status(202).json({ message: "Post Created" });
  } catch (error) {
    return res.status(501).json({ error: "Something Went Wrong" });
  }
};

//Get all Post  no auth is require

export const getAllPost = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate("agentId").sort({
      createdAt: -1,
    });
    return res.status(200).json(posts);
  } catch (error) {
    return;
    return res.status(501).json({ error: "Something Went Wrong" });
  }
};
