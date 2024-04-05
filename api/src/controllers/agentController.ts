// getAll Agents

import { Request, Response, json } from "express";
import { Agents } from "../models/agentModels";

export const getAllAgents = async (req: Request, res: Response) => {
  try {
    const agents = await Agents.find().sort({ createdAt: -1 });
    if (agents.length == 0)
      return res.status(404).json({ message: "No Data Found" });
    return res.status(200).json(agents);
  } catch (error: any) {
    return res.status(501).json({ error: error.message });
  }
};

// create agent

type createAgentBody = {
  name: string;
  email: string;
  avatar?: string;
  password: string;
};

export const createAgent = async (req: Request, res: Response) => {
  const body: createAgentBody = req.body;
  try {
    
  } catch (error: any) {}
};
