import router from "express";
import { createAgent, getAllAgents } from "../controllers/agentController";

const route = router();

route.get("/", getAllAgents);
route.post("/", createAgent);

export default route;
