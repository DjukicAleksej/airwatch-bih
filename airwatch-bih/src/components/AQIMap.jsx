import {MapContainer ,TileLayer} from "react-leaflet";

export default function AQIMap(){
    return(
        <MapContainer 
        center={[44.2,17.7]} //BiH centar
        zoom={7}
        style={{height:"100vh",width:"100%"}}
    > 
    <TileLayera
    attribution='&copy; Openstreetmap contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    </MapContainer>
    );
}