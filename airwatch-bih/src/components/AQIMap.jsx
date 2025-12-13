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
        if(!points || points.length === 0) return;
        const heat = L.heatLayer(points, {radius: 25, blur: 15, maxZoom: 17});
        heat.addTo(map);
    }, [map, points]);
    return null;
}

export default function AQIMap() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.openaq.org/v3/locations?country=BA", {
                    headers: { "X-API-Key": apiKey },
                });
                const data = await response.json();
                setAqiData(data.results);
            } catch(err) {
                console.error("Error fetching AQI DATA:",err);
            }
        };
        
        fetchData();
        const interval = setInterval(fetchData, 10 * 60 * 1000); // for 10 min refresh
        return () => clearInterval(interval);
    }, []);

    const heatPoints = data
    .filter((loc) => loc.coordinates)
    .map((loc) => {
        const pm25 = loc.parameters?.find((p) => p.parameter === "pm25")?.lastValue ?? 0;
        const intensity = Math.min(pm25 / 150, 1); // 0-1 moze biti ohoho
        return [loc.coordinates.latitude, loc.coordinates.longitude, intensity];
    });

    return (
        <MapContainer
            center={[44.2, 17.7]}
            zoom={7}
            style={{ height: "100%", width: "100%" }}
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
            {/* City Markers */}
            {cities.map((city) => {
                const pm25 = aqiData.find((loc) => loc.name.includes(city.name))?.parameters?.find((p) => p.parameter === "pm25")?.lastValue ?? 0;
                return (
                    <Marker key={city.name} position={[city.lat, city.lng]} icon={createIcon(getMarkerColor(pm25))}>
                    <Popup>
                    {city.name} <br />
                    PM2.5: {pm25} µg/m³
                    </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
}