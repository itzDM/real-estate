import router from "express";
import { getAllAgents } from "../controllers/agentController";

const route = router();

route.get("/", getAllAgents);

export default route;
