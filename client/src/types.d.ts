export interface PostType {
  _id: string;
  title: string;
  description: string;
  agentId: AgentID;
  room: string;
  location: string;
  likes: string[];
  longitude: string;
  latitude: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AgentID {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
