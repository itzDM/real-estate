import { useContext } from "react";
import { apiRequest } from "../../lib/apiRequest";
import "./userProfile.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogout = async () => {
    await apiRequest("/auth/logout", {
      method: "POST",
    });
    updateUser(null);
    navigate("/");
  };
  return (
    <div>
      <button onClick={handelLogout}>Logout</button>
    </div>
  );
};
