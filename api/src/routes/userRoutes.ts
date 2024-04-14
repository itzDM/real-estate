import routes from "express";
import { getAllUser, updateUser } from "../controllers/userControllers";
import { verifyToken } from "../middleware/jsonToken";

const route = routes();

route.get("/", verifyToken, getAllUser);
route.put("/update", verifyToken, updateUser);

export default route;
