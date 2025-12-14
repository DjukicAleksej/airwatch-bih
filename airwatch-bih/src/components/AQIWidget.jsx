import {useEffect,useState} from 'react';
const TOKEN = import.meta.env.VITE_WAQI_TOKEN;


export default function AQIWidget({station}) {
    const [data, setData] = useState(null);
    const[error,setError] = useState(false);

    useEffect(() => {
        fetch(`https://api.waqi.info/feed/${station}/?token=${TOKEN}`)
        .then(res => res.json())
        .then(json => {
            if(json.status === "ok") {
                setData(json.data);
            } else {
                setError(true);
            }
        })
        .catch(() => setError(true));
    }, [station]);

    if(error) return <div>NO AQI DATA</div>;
    if(!data) return <div> LOADING AQI...</div>

    return(
        <div style={{minwidth:220}}>
            <h4>{data?.city?.name ?? "Unknown location"}</h4>
            <div style = {{fontSize: 32,fontWeight:"bold"}}>
                AQI: {data.aqi}
            </div>
            <div>
                Dominant: <b>{data?.dominentpol? data.dominentpol.toUpperCase() : "N/A"}</b>
            </div>
            <hr />
            <div>PM2.5: {data?.iaqi?.pm25?.v ?? "-"}</div>
            <div>PM10: {data?.iaqi?.pm10?.v ?? "-"}</div>
            <div>O₃: {data?.iaqi?.o3?.v ?? "-"}</div>
            <small>
                Updated: {data?.time?.iso?.v ?? "-"}
            </small>
            <hr />
            <small>
                source:{" "}
                <a href="https://api.waqi.info/feed/${station}" target="_blank" rel="noreferrer">
                    WAQI
                </a>
            </small>
        </div>
    );
}