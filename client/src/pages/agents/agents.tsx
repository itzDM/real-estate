import { useEffect, useState } from "react";
import AgentCard from "../../components/AgentCard/agentCard";
import { apiRequest } from "../../lib/apiRequest";
import { AgentID } from "../../types";
import "./agents.css";

export default function Agents() {
  const [error, setError] = useState<string>("");
  const [agents, setAgents] = useState<AgentID[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await apiRequest(`/agent`);
      if (data.error) setError(data.error);
      else {
        setAgents(data);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="agentCard">
        {agents?.map((agent) => (
          <AgentCard prop={agent} key={agent._id} />
        ))}
      </div>
      {error && <p className="error">{error}</p>}
    </>
  );
}
