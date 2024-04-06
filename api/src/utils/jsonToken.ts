import jwt from "jsonwebtoken";

export const generateToken = (id: string, type: string) => {
  const token = jwt.sign({ id, type }, process.env.JWT_SECRET!);
  return token;
};

export const compareToken = (token: string) => {
  const user = jwt.verify(token, process.env.JWT_SECRET!);
  return user;
};
