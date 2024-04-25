import { Link } from "react-router-dom";
import { apiRequest } from "../../lib/apiRequest";
import { PostType } from "../../types";
import "./Card.css";
export default function Card({ data }: { data: PostType[] }) {
  const handelLike = async (id: string) => {
    const res = await apiRequest(`/post/like/${id}`);
    if (res.message) {
      window.alert(res.message);
    } else {
      window.alert(res.error);
    }
  };
  return (
    <>
      {data?.map((item) => (
        <div className="cardContainer" key={item._id}>
          <Link className="cardImage" to={`/${item._id}`}>
            <img src="/homeBg.jpg" alt="tittle" />
          </Link>
          <article className="cardText">
            <h1>{item.title}</h1>
            <h1>{item.price}</h1>
            <p>{item.location}</p>
            <div className="cardFooter">
              <p>{item.type}</p>
              <Link to={`/${item._id}`}>View</Link>
              <button>
                <span className="heart" onClick={() => handelLike(item?._id)}>
                  ♥ {item?.likes.length}
                </span>
              </button>
            </div>
          </article>
        </div>
      ))}
    </>
  );
}
