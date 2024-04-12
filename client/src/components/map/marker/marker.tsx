import { Marker, Popup } from "react-leaflet";
import "./marker.css";
import { PostType } from "../../../types";
import { Link } from "react-router-dom";

export default function MarkerPin({ item }: { item: PostType }) {
  return (
    <Marker position={[Number(item.latitude), Number(item.longitude)]}>
      <Popup>
        <div>
          <Link to={item._id}>{item.title}</Link>
        </div>
      </Popup>
    </Marker>
  );
}
