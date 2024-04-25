import routes from "express";
import {
  createPost,
  getAllPost,
  getPostById,
  likePost,
} from "../controllers/postController";
import { verifyToken } from "../middleware/jsonToken";

const route = routes();

route.post("/", verifyToken, createPost);
route.get("/like/:id", verifyToken, likePost);
route.get("/", getAllPost);
route.get("/:id", getPostById);

export default route;
