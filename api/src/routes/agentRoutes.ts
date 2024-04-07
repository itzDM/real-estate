import router from "express";
import { getAllAgents } from "../controllers/agentController";
import { verifyToken } from "../middleware/jsonToken";

const route = router();

route.get("/", verifyToken, getAllAgents);

export default route;
