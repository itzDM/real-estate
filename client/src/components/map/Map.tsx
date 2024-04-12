import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import MarkerPin from "./marker/marker";
import { PostType } from "../../types";
export default function Map({ item }: { item: PostType[] }) {
  const position = { lat: 20.5937, lng: 78.9629 };
  return (
    <MapContainer
      center={position}
      zoom={5}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {item?.map((item) => (
        <MarkerPin item={item} key={item._id} />
      ))}
    </MapContainer>
  );
}
