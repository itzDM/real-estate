import { Request, Response } from "express";
import { Users } from "../models/userModels";

// getAll Agents

export const getAllAgents = async (req: Request, res: Response) => {
  try {
    const agents = await Users.find().sort({ createdAt: -1 });
    if (agents.length == 0)
      return res.status(404).json({ message: "No Data Found" });
    return res.status(200).json(agents);
  } catch (error: any) {
    return res.status(501).json({ error: error.message });
  }
};
