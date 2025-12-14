import {useEffect} from 'react';

export default function AQIWidget({city}) {
    const containerId = `aqi-widget-${city}`;

    useEffect(() => {
        if(!window._aqiFeed){
        const script = document.createElement("script");
        script.src = "//feed.aqicn.org/feed/feed.v1.js";
        script.async = true;
        script.onload = init;
        document.body.appendChild(script);
        } else {
            init();
        }
        function init() {
            window._aqiFeed({
                container: containerId,
                city: city,
                display: "%details",
            });
        }
    } , [city]);

    return <div id={containerId} />;
}