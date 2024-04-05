import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
export default function Map() {
  const position = { lat: 26.7606, lng: 83.3732 };
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
