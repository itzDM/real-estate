import { useState } from "react";
import { apiRequest } from "../../lib/apiRequest";
import "./create.css";
export default function CreatePost() {
  const [error, SetError] = useState("");
  const [message, SetMessage] = useState("");
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const { image, ...data } = Object.fromEntries(formData.entries());
    console.log(image);
    const response = await apiRequest("/post", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.message) {
      (e.target as HTMLFormElement).reset();
      SetMessage(response.message);
    }
    SetError(response.error);
  };
  return (
    <div>
      <section className="create">
        <form className="createForm" onSubmit={handelSubmit}>
          <h2>Create A New real-estate</h2>
          <input
            type="text"
            name="title"
            placeholder="Enter The Title"
            required
          />
          <textarea
            name="description"
            placeholder="Enter the description"
            required
          />
          <input type="text" name="price" placeholder="Enter Price" required />
          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            required
          />
          <input
            type="text"
            name="longitude"
            placeholder="Enter longitude Position"
            required
          />
          <input
            type="text"
            name="latitude"
            placeholder="Enter latitude Position"
            required
          />
          <select name="type">
            <option value="lands">Lands</option>
            <option value="room">Room</option>
          </select>
          <input type="file" name="image" accept=" image/*" />
          <button type="submit">Create</button>
          {error && <p className="error">{error}</p>}
          {message && <p className="message">{message}</p>}
        </form>
      </section>
    </div>
  );
}
