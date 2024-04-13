import { useLocation } from "react-router-dom";
import Map from "../../components/map/Map";
import "./placeDetails.css";
import { apiRequest } from "../../lib/apiRequest";
import { useEffect, useState } from "react";
import { PostType } from "../../types";
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
            <h1>this is details </h1>
          </div>
          <div className="location">{cardData && <Map item={cardData} />}</div>
        </article>
      </section>
    </div>
  );
}
