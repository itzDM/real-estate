import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { AgentOrUserProp } from "../../types";
import { generateToken } from "../middleware/jsonToken";
import { Users } from "../models/userModels";

// login User
export const loginUser = async (req: Request, res: Response) => {
  const body: AgentOrUserProp = req.body;
  try {
    const user = await Users.findOne({ email: body.email }).select("+password");
    if (!user) return res.status(404).json({ error: "Invalid Credentials" });
    const isCorrectPass = bcrypt.compareSync(body.password, user.password);
    if (!isCorrectPass)
      return res.status(404).json({ error: "Invalid Credentials" });
    const token = generateToken(user._id, user.type);
    const { password, ...info } = user._doc;
    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: eval(process.env.EXPIRE_TIME!),
      })
      .status(200)
      .json({ data: info });
  } catch (error: any) {
    return res.status(501).json({ error: "Something Went Wrong " });
  }
};

// registration User or agent
export const registerUser = async (req: Request, res: Response) => {
  const body: AgentOrUserProp = req.body;
  try {
    if (body.type === "admin")
      return res.status(401).json({ error: "Invalid Fields" });
    const hashPass = bcrypt.hashSync(body.password, 10);
    await new Users({ ...body, password: hashPass }).save();
    return res.status(201).json({ message: "User Created" });
  } catch (error: any) {
    if (error.code == 11000)
      return res.status(409).json({ error: "User Already Exist" });
    return res.status(500).json({ error: error.message });
  }
};

// logout User

export const logoutUser = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token").status(200).json({ message: "User Logged Out" });
  } catch (error: any) {
    return res.status(501).json({ error: error.message });
  }
};
