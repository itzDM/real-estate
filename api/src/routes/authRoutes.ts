import routes from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/authController";

const route = routes();

route.post("/login", loginUser);
route.post("/register", registerUser);
route.post("/logout", logoutUser);

export default route;
