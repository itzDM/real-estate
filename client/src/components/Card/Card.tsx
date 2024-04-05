import { Link } from "react-router-dom";
import "./Card.css";
export default function Card() {
  return (
    <div className="cardContainer">
      <Link className="cardImage" to={"/123"}>
        <img src="/homeBg.jpg" alt="tittle" />
      </Link>
      <article className="cardText">
        <h1>Title</h1>
        <p>location</p>
        <p>price</p>
        <div className="cardFooter">
          <p>rooms</p>
          <p>parking</p>
          <Link to="/123">View</Link>
          <button>
            <i className="heart">♥</i>
          </button>
        </div>
      </article>
    </div>
  );
}
