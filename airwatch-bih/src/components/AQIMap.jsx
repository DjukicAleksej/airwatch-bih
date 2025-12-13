import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";


const TOKEN = import.meta.env.VITE_WAQI_TOKEN;

const cities = [
    {name: "Prijedor", lat:44.979, lng:16.714},
    {name: "Banja Luka", lat:44.772, lng:17.191},
    {name: "Tuzla", lat:44.538, lng:18.667},
    {name: "Mostar", lat:43.343, lng:17.807},
    {name: "Zenica", lat:44.203, lng:17.908},
    {name: "Bijeljina", lat:44.758, lng:19.216},
    { name: "Sarajevo", lat: 43.856, lng: 18.413 }
];

function getMarkerColor(aqi) {
    if (aqi <= 50) return 'green';
    if (aqi <= 100) return 'yellow';
    if (aqi <= 150) return 'orange';
    if (aqi <= 200) return 'red';
    if (aqi <= 300) return 'purple';
    return "maroon";
}
function getAQIDescription(aqi) {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return "Hazardous";
}


function createIcon(color){
    return new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-'+color+'.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        shadowSize: [41, 41]
    });
}

export default function AQIMap() {
    const [aqiData, setAqiData] = useState({});
    return (
        <MapContainer
            center={[44.2, 17.7]}
            zoom={7}
            style={{ height: "100vh", width: "100%" }}
            maxBounds={[
                [42.5, 15.5],
                [45.5, 19.5]
            ]}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            {/* Tile layer from WAQI providing AQI tiles */}
            <TileLayer
                url={`https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=${TOKEN}`}
  attribution='Map data &copy; <a href="https://aqicn.org">WAQI</a>'
            />
            
            
    
        </MapContainer>
    );
}