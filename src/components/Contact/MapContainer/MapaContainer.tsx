import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Container } from "./MapaContainer.styled";

import Yo from "../../../assets/143145947.png";

export function MapaContainer() {
  const customIcon = new L.Icon({
    iconUrl: Yo,
    iconSize: [61, 61],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <Container>
      <MapContainer
        center={[1.6144, -75.6062]}
        zoom={13}
        className="MapContainer"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[1.6144, -75.6062]} icon={customIcon}>
          <Popup>Florencia, Caquetá</Popup>
        </Marker>
        {/* Ciudad dentro del mapa */}
        <div className="City">Florencia / Caquetá</div>
      </MapContainer>
    </Container>
  );
}
