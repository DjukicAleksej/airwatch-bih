import L from "leaflet";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
const cities = [
    {name: "Prijedor", lat:44.979, lng:16.714},
    {name: "Banja Luka", lat:44.772, lng:17.191},
    {name: "Tuzla", lat:44.538, lng:18.667},
    {name: "Sarajevo", lat:43.856, lng:18.413},
    {name: "Mostar", lat:43.343, lng:17.807},
    {name: "Zenica", lat:44.203, lng:17.908},
    {name: "Bijeljina", lat:44.758, lng:19.216},
];
function getMarkerColor(aqi) {
    if (aqi <= 50) return 'green';
    if (aqi <= 100) return 'yellow';
    if (aqi <= 150) return 'orange';
    if (aqi <= 200) return 'red';
    return "purple";
}
function createIcon(color){
    return L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-'+color+'.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        shadowSize: [41, 41]

    })
}
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
      maxBounds ={[
        [42.5,15.5],
        [45.5,19.5]
      ]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <HeatmapLayer />
    </MapContainer>
  );
}
