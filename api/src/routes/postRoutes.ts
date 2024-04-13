import routes from "express";
import { verifyToken } from "../middleware/jsonToken";
import {
  createPost,
  getAllPost,
  getPostById,
} from "../controllers/postController";

const route = routes();

route.post("/", verifyToken, createPost);
route.get("/", getAllPost);
route.get("/:id", getPostById);

export default route;
