import Map from "../../components/map/Map";
import "./placeDetails.css";
export default function PlaceDetails() {
  return (
    <div className="placeDetails">
      <section className="left">
        <div className="placeImg">
          <img src="/homeBg.jpg" alt="TODO:Title" />
        </div>
        <article>
          <div className="articleHead">
            <div>
              <h3>Name</h3>
              <h3>Location</h3>
            </div>
            <div className="agentDetails">
              <p>img here</p>
              <h1>Agents name</h1>
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sit.
          </p>
        </article>
      </section>
      <section className="right">
        <article>
          <div className="details">
            <h1>this is details </h1>
          </div>
          <div className="location">
            <Map />
          </div>
        </article>
      </section>
    </div>
  );
}
