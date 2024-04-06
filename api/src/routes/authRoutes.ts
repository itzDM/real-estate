import routes from "express";
import { loginUser, registerUser } from "../controllers/authController";

const route = routes();

route.post("/login", loginUser);
route.post("/register", registerUser);

export default route;
