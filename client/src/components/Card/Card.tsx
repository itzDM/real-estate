import { Link } from "react-router-dom";
import "./Card.css";
import { PostType } from "../../types";
export default function Card({ data }: { data: PostType[] }) {
  return (
    <>
      {data?.map((item) => (
        <div className="cardContainer" key={item._id}>
          <Link className="cardImage" to={item._id}>
            <img src="/homeBg.jpg" alt="tittle" />
          </Link>
          <article className="cardText">
            <h1>{item.title}</h1>
            <p>{item.location}</p>
            <div className="cardFooter">
              <p>{item.room}</p>
              <Link to={item._id}>View</Link>
              <button>
                <i className="heart">♥</i>
              </button>
            </div>
          </article>
        </div>
      ))}
    </>
  );
}
