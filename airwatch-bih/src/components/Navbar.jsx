export default function Navbar(){
    return(
        <div className="topbar">
            <div className="logo">AQI BIH</div>
            <div className="links">
                <a href="/">Map</a>
                <a href="/prevention">Prevention</a>
                <a href="https://waqi.info" target="_blank">WAQI</a>
            </div>
        </div>
    );
}