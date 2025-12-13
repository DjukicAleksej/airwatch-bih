import L from "leaflet";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";

const points = [
    [44.979,16.714, 0.5], // Prijedor city 
    [44.772,17.191, 0.7], // Banja Luka city
]
function HeatmapLayer(){
    const map = useMap();

    map.whenReady(()=> {
        const heat = L.heatLayer(points, {radius: 25,blur: 15,maxZoom: 17});
        heat.addTo(map);
    })
    return null;
}
export default function AQIMap() {
  return (
    <MapContainer
      center={[44.2, 17.7]} // centar BiH
      zoom={7}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <HeatmapLayer />
    </MapContainer>
  );
}
