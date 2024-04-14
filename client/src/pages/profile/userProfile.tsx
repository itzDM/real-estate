import { useContext, useState } from "react";
import { apiRequest } from "../../lib/apiRequest";
import "./userProfile.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const { updateUser, currentUser } = useContext(AuthContext);
  const [photoPrev, setPhotoPrev] = useState<string>("");
  const [photo, setPhoto] = useState<File>();
  const navigate = useNavigate();

  const handelLogout = async () => {
    await apiRequest("/auth/logout", {
      method: "POST",
    });
    updateUser(null);
    navigate("/");
  };

  const handelImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhotoPrev(reader.result);
          setPhoto(file);
        }
      };
    }
  };

  const handelUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const res = await apiRequest("/user/update", {
      method: "PUT",
      body: JSON.stringify({ ...data, avatar: photoPrev }),
    });
    console.log(res);
  };
  return (
    <div className="profileSection">
      <form className="leftUserProfile" onSubmit={handelUpdate}>
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
        <input type="file" accept="image/*" onChange={handelImg} />
        <button type="submit">Update Details</button>
      </form>
      <div className="rightProfile">
        <img
          className="prevImg"
          src={photoPrev ? photoPrev : currentUser?.avatar || "./noAvatar.svg"}
          alt=""
        />
        <button onClick={handelLogout}>Logout</button>
      </div>
    </div>
  );
};
