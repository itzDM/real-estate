import { useContext } from "react";
import { apiRequest } from "../../lib/apiRequest";
import "./userProfile.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogout = async () => {
    await apiRequest("/auth/logout", {
      method: "POST",
    });
    updateUser(null);
    navigate("/");
  };
  return (
    <div className="profileSection">
      <form className="leftUserProfile">
        <input
          type="text"
          name="name"
          defaultValue={currentUser?.name}
          placeholder="Enter Your Name"
          id=""
        />
        <input
          type="email"
          name="email"
          defaultValue={currentUser?.email}
          placeholder="Enter Your Name"
          id=""
        />
        <input type="file" accept="image/*" />
        <button type="submit">Update Details</button>
      </form>
      <div className="rightProfile">
        <img
          className="prevImg"
          src={currentUser?.avatar || "./noAvatar.svg"}
          alt=""
        />
        <button onClick={handelLogout}>Logout</button>
      </div>
    </div>
  );
};
