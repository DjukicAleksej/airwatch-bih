import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import AQIWidget from "./AQIWidget.jsx";

const TOKEN = import.meta.env.VITE_WAQI_TOKEN;

const cities = [
  { name: "Sarajevo", lat: 43.856, lng: 18.413 ,slug: "sarajevo",station:"@9263"},
  { name: "Banja-Luka", lat: 44.772, lng: 17.191 ,slug: "banja luka" ,station:"@84268"},
  { name: "Tuzla", lat: 44.538, lng: 18.667 ,slug: "tuzla" ,station: "@9319"},
  { name: "Mostar", lat: 43.343, lng: 17.807 ,slug: "mostar" ,station:"@14726"},
  { name: "Zenica", lat: 44.203, lng: 17.908 ,slug: "zenica",station: "@12656" },
  { name: "Brčko", lat: 44.873, lng: 18.810 ,slug: "brcko" ,station : "@463582"},
  { name: "Goražde", lat: 43.673, lng: 18.958 , slug: "gorazde" ,station:"@9271"},
  { name: "Bihać", lat: 44.816, lng: 15.870 ,slug: "bihac"  ,station:"@13578"},
  { name: "Trebinje", lat: 42.711, lng: 18.345 , slug: "trebinje" ,station:"@195118"},
  { name: "Konjic", lat: 43.650, lng: 17.951 ,  slug: "konjic" ,station: "@9265"},
  { name: "Travnik", lat: 44.229, lng: 17.664 , slug: "travnik" ,station:"@14693"},
  { name: "Maglaj", lat: 44.666, lng: 18.111 , slug: "maglaj" ,station:"@13643"},
  { name: "Vitez", lat: 44.172, lng: 17.673 , slug: "vitez" ,station:"@505441"},
  { name: "Kakanj", lat: 44.135, lng: 18.113 , slug: "kakanj",station: "@10095" },
  { name: "Ilidža", lat: 43.831, lng: 18.343 , slug: "ilidza" ,station:"@9318"},
];




function createIcon(){
    return new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        shadowSize: [41, 41]
    });
}

export default function AQIMap() {
    


return (
    <MapContainer
        center={[44.2, 17.7]}
        zoom={8}
        style={{ height: "70vh", width: "100%"}}
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
        {cities.map((city) => (
            <Marker key={city.station} position={[city.lat, city.lng]} icon={createIcon()}>
                <Popup minWidth={200}>
                    <AQIWidget station={city.station} />
                </Popup>
            </Marker>
        ))}
    </MapContainer>
);
}