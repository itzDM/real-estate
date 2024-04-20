import "./create.css";
export default function CreatePost() {
  return (
    <div>
      <section className="create">
        <form className="createForm">
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
            <option value="land">Lands</option>
            <option value="room">Room</option>
          </select>
          <input type="file" name="image" accept=" image/*" required />
          <button type="submit">Create</button>
        </form>
      </section>
    </div>
  );
}
