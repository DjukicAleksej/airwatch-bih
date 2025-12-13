import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";

const apiKey = import.meta.env.VITE_OPENAQ_API_KEY;

const cities = [
    {name: "Prijedor", lat:44.979, lng:16.714},
    {name: "Banja Luka", lat:44.772, lng:17.191},
    {name: "Tuzla", lat:44.538, lng:18.667},
    {name: "Sarajevo", lat:43.856, lng:18.413},
    {name: "Mostar", lat:43.343, lng:17.807},
    {name: "Zenica", lat:44.203, lng:17.908},
    {name: "Bijeljina", lat:44.758, lng:19.216},
];

function getMarkerColor(pm25) {
    if (pm25 <= 12) return 'green';
    if (pm25 <= 34.5) return 'yellow';
    if (pm25 <= 55.4) return 'orange';
    if (pm25 <= 150.4) return 'red';
    return "purple";
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

function HeatmapLayer({points}) {
    const map = useMap();

    useEffect(() => {
        if(!points.length) return;
        const heat = L.heatLayer(points, {radius: 25, blur: 15, maxZoom: 17});
        heat.addTo(map);
        return () => map.removeLayer(heat);
    }, [map, points]);
    return null;
}

export default function AQIMap() {
    const [aqiData, setAqiData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch(
            "https://api.openaq.org/v3/locations?county=BA&limit=100",
            {headers: { "X-API-Key": apiKey }}
          );
          const json = await res.json();
          setAqiData(json.results || []);
        };
        
        fetchData();
        const interval = setInterval(fetchData, 10 * 60 * 1000); // for 10 min refresh
        return () => clearInterval(interval);
    }, []);

    const heatPoints = aqiData
    .filter((l) => l.coordinates)
    .map((l) => {
        const pm25 = l.parameters?.find((p) => p.parameter === "pm25")?.lastValue ?? 0;
        return [l.coordinates.latitude, l.coordinates.longitude, Math.min(pm25 / 150, 1) ]; // Normalize intensity
    });

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
            <HeatmapLayer points={heatPoints} />
            
            {cities.map((city) => {
                const pm25 = aqiData.find((l) => l.name?.includes(city.name))?.parameters?.find((p) => p.parameter === "pm25")?.lastValue ?? 0;
                return (
                    <Marker 
                    key={city.name} 
                    position={[city.lat, city.lng]} 
                    icon={createIcon(getMarkerColor(pm25))}>
                    <Popup>
                    <b>{city.name}</b> <br />
                    PM2.5: {pm25} µg/m³
                    </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
}