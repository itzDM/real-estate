import { Express } from "express-serve-static-core";

interface TokenData {
  userId: string;
  type: string;
}

declare module "express-serve-static-core" {
  interface Request {
    tokenData: TokenData;
  }
}

type AgentOrUserProp = {
  name: string;
  email: string;
  avatar: string;
  password: string;
};
