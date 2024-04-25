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

  const filter = {
    ...(query.search && { title: { $regex: query?.search, $options: "i" } }),
    ...((query.min || query.max) && {
      price: {
        ...(query.min && { $gte: Number(query.min) }),
        ...(query.max && { $lte: Number(query.max) }),
      },
    }),
    ...(query.type && { type: query.type }),
  };

  try {
    const posts = await Post.find(filter).populate("agentId").sort({
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

// post Like

export const likePost = async (req: Request, res: Response) => {
  try {
    const { userId } = req.tokenData;
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post Not Found" });
    }
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      return res.status(200).json({ message: "Post has been likes" });
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      return res.status(200).json({ message: "Post has been dislikes" });
    }
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error: "Something Went Wrong" });
  }
};
