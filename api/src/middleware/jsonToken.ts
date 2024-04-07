import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const generateToken = (id: string, type: string) => {
  const token = jwt.sign({ id, type }, process.env.JWT_SECRET!);
  return token;
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  jwt.verify(
    token,
    process.env.JWT_SECRET!,
    (err: jwt.VerifyErrors | null, payload: any) => {
      if (err) return res.status(401).json({ error: "Token is not valid" });
      req.tokenData = {
        userId: payload.id,
        type: payload.type,
      };
      next();
    }
  );
};
