import { Request, Response } from "express";
import { Users } from "../models/userModels";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    if (req.tokenData.type != "admin")
      return res.status(401).json({ error: "Your are Not Allow" });
    const users = await Users.find({ type: "user" }).sort({ createdAt: -1 });
    if (users.length == 0)
      return res.status(404).json({ message: "No Data Found" });
    return res.status(200).json(users);
  } catch (error: any) {
    return res.status(501).json({ error: error.message });
  }
};
