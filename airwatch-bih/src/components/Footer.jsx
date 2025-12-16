export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <h3>AQI BIH</h3>
                    <p> Real-time air quality data for Bosnia & Herzegovina.
                        Powered by WAQI.
                    </p>
                </div>
                <div className="footer-right">
                    <p>
                        Made by{" "}
                        <span className="author">DjukicAleksej</span>
                    </p>
                    <p className="hackclub">
                        Project for <span>Hack Club</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}