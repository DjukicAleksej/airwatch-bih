import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <div className="topbar">
            <div className="logo">AQI BIH</div>
            <div className="links">
                <Link to="/">Map</Link>
                <Link to="/prevention">Prevention</Link>
                <a href="https://waqi.info" target="_blank">WAQI</a>
            </div>
        </div>
    );
}