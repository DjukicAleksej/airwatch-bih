import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";


const TOKEN = import.meta.env.VITE_WAQI_TOKEN;

const cities = [
  { name: "Sarajevo", lat: 43.856, lng: 18.413 ,slug: "sarajevo"},
  { name: "Banja Luka", lat: 44.772, lng: 17.191 ,slug: "banja luka" },
  { name: "Tuzla", lat: 44.538, lng: 18.667 ,slug: "tuzla" },
  { name: "Mostar", lat: 43.343, lng: 17.807 ,slug: "mostar" },
  { name: "Zenica", lat: 44.203, lng: 17.908 ,slug: "zenica" },
  { name: "Bijeljina", lat: 44.758, lng: 19.216 ,slug: "bijeljina" },
  { name: "Prijedor", lat: 44.979, lng: 16.714,slug: "prijedor" },
  { name: "Doboj", lat: 44.738, lng: 18.176 ,slug: "doboj" },
  { name: "Brčko", lat: 44.873, lng: 18.810 ,slug: "brcko" },
  { name: "Gradiška", lat: 45.030, lng: 17.254, slug: "gradiska" },
  { name: "Goražde", lat: 43.673, lng: 18.958 , slug: "gorazde" },
  { name: "Bihać", lat: 44.816, lng: 15.870 ,slug: "bihac"  },
  { name: "Livno", lat: 43.826, lng: 17.015 ,   slug: "livno" },
  { name: "Trebinje", lat: 42.711, lng: 18.345 , slug: "trebinje" },
  { name: "Čapljina", lat: 43.095, lng: 17.708, slug: "capljina" },
  { name: "Konjic", lat: 43.650, lng: 17.951 ,  slug: "konjic" },
  { name: "Bugojno", lat: 44.056, lng: 17.428 , slug: "bugojno" },
  { name: "Travnik", lat: 44.229, lng: 17.664 , slug: "travnik" },
  { name: "Foča", lat: 43.530, lng: 18.650 ,    slug: "foca" },
  { name: "Široki Brijeg", lat: 43.373, lng: 17.557 ,   slug: "siroki brijeg" },
  { name: "Cazin", lat: 44.575, lng: 15.971 , slug: "cazin" },
  { name: "Maglaj", lat: 44.666, lng: 18.111 , slug: "maglaj" },
  { name: "Vitez", lat: 44.172, lng: 17.673 , slug: "vitez" },
  { name: "Livno", lat: 43.825, lng: 17.015 , slug: "livno" },
  { name: "Neum", lat: 42.925, lng: 17.635 , slug: "neum" },
  { name: "Kakanj", lat: 44.135, lng: 18.113 , slug: "kakanj" },
  { name: "Žepče", lat: 44.420, lng: 18.039 , slug: "zepce" },
  { name: "Sarajevo-Romanija", lat: 43.850, lng: 18.480 , slug: "sarajevo-romanija" },
  { name: "Ilidža", lat: 43.831, lng: 18.343 , slug: "ilidza" },
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
            {cities.map((city) => (
                <Marker key={city.name} position={[city.lat, city.lng]} icon={createIcon()}>
                
                <Popup>
                <b>
                {city.name}
                </b> <br />
                <a href ={`https://aqicn.org/city/${city.name.toLowerCase()}/`} target="_blank" rel="noreferrer">More information on AQI for {city.name}.</a>
                </Popup>
                </Marker>
            ))}
    
        </MapContainer>
    );
}