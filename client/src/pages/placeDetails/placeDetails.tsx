import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../components/map/Map";
import { apiRequest } from "../../lib/apiRequest";
import { PostType } from "../../types";
import "./placeDetails.css";
export default function PlaceDetails() {
  const [cardData, setCardData] = useState<PostType[]>([]);
  const location = useLocation();
  const id = location.pathname.split("/")[1];

  useEffect(() => {
    const getData = async () => {
      const data = await apiRequest(`/post/${id}`);
      setCardData(data);
    };
    getData();
  }, [id]);
  return (
    <div className="placeDetails">
      <section className="left">
        <div className="placeImg">
          <img src="/homeBg.jpg" alt={cardData[0]?.title} />
        </div>
        <article>
          <div className="articleHead">
            <div>
              <h3>{cardData[0]?.title}</h3>
              <h3>{cardData[0]?.location}</h3>
            </div>
            <div className="agentDetails">
              <img
                src={cardData[0]?.agentId?.avatar || "./noAvatar.svg"}
                alt={cardData[0]?.agentId?.name}
              />
              <h1>{cardData[0]?.agentId?.name}</h1>
            </div>
          </div>
          <p className="description">{cardData[0]?.description}</p>
        </article>
      </section>
      <section className="right">
        <article>
          <div className="details">
            <h2>{cardData[0]?.title}</h2>
            <p>{cardData[0]?.location}</p>
            <p>{cardData[0]?.type}</p>
            <p>{cardData[0]?.price}</p>
            <p>
              Likes : <span>{cardData[0]?.likes.length}</span>
            </p>
            <p>
              Create At :
              <span>{cardData[0]?.createdAt.toString().split("T")[0]}</span>
            </p>
          </div>
          <div className="location">{cardData && <Map item={cardData} />}</div>
        </article>
      </section>
    </div>
  );
}
