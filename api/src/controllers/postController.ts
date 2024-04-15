import { Request, Response } from "express";
import { Post } from "../models/postModels";

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
  const query = req.query;
  try {
    console.log(query);
    const posts = await Post.find({
      $or: [
        { title: { $regex: query.search, $options: "i" } },
        {
          price: {
            $gte: Number(query.min),
            $lte: Number(query.max),
          },
        },
      ],
    })
      .populate("agentId")
      .sort({
        createdAt: -1,
      });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(501).json({ error: "Something Went Wrong" });
  }
};

// Get Post By Id

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.find({ _id: req.params.id }).populate("agentId");
    if (post.length == 0)
      return res.status(404).json({ error: "Post Not Found" });
    return res.status(200).json(post);
  } catch (error) {
    return res.status(501).json({ error: "Something Went Wrong" });
  }
};
