import { Express } from "express-serve-static-core";

interface TokenData {
  userId: string;
  type: "user" | "admin" | "agent";
}

declare module "express-serve-static-core" {
  interface Request {
    tokenData: TokenData;
  }
}

type AgentOrUserProp = {
  name: string;
  email: string;
  type: "user" | "admin" | "agent";
  avatar: string;
  password: string;
};
