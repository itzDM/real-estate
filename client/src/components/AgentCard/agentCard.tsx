import { AgentID } from "../../types";
import "./agentCard.css";
export default function AgentCard({ prop }: { prop: AgentID }) {
  return (
    <article className="agentSection">
      <img
        className="agentImg"
        src={prop?.avatar || "./noAvatar.svg"}
        alt={prop?.name}
      />
      <div className="agentsInfo">
        <h3>{prop.name}</h3>
        <h4>{prop.email}</h4>
        <h5>{prop.type}</h5>
      </div>
    </article>
  );
}
