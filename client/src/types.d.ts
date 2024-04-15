export interface PostType {
  _id: string;
  title: string;
  description: string;
  agentId: AgentID;
  price: number;
  type: string;
  location: string;
  likes: string[];
  longitude: number;
  latitude: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
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
