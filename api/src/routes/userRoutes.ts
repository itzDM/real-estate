import routes from "express";
import { getAllUser } from "../controllers/userControllers";
import { verifyToken } from "../middleware/jsonToken";

const route = routes();

route.get("/", verifyToken, getAllUser);

export default route;
