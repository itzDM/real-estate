import routes from "express";
import { verifyToken } from "../middleware/jsonToken";
import { createPost, getAllPost } from "../controllers/postController";

const route = routes();

route.post("/", verifyToken, createPost);
route.get("/", getAllPost);

export default route;
