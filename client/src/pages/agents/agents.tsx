import { useEffect, useState } from "react";
import { AgentID } from "../../types";
import { apiRequest } from "../../lib/apiRequest";
import AgentCard from "../../components/AgentCard/agentCard";
import "./agents.css";

export default function Agents() {
  const [agents, setAgents] = useState<AgentID[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await apiRequest(`/agent`);
      setAgents(data);
    };
    getData();
  }, []);

  return (
    <div className="agentCard">
      {agents?.map((agent) => (
        <AgentCard prop={agent} key={agent._id} />
      ))}
    </div>
  );
}
