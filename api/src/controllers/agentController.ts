import { Request, Response } from "express";
import { Agents } from "../models/agentModels";
import bcrypt from "bcryptjs";

// getAll Agents

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
    const hashPass = bcrypt.hashSync(body.password, 10);
    await new Agents({ ...body, password: hashPass }).save();
    return res.status(201).json({ message: "Agent Created" });
  } catch (error: any) {
    if (error.code == 11000)
      return res.status(409).json({ error: "Agent Already Found !" });
    return res.status(500).json({ error: error.message });
  }
};
