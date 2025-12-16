export default function Prevention(){
    return (
        <div className="page prevention">
            {/*HERO OF THE PAGEEEEE*/}

            <section className = "prevention-hero">
                <h1>
                    Air Pollution <span>Prevention</span>
                </h1>
                <p>
                    Understand the causes , protect your health , and take action.
                    Clean air is not optional , it's a human right.
                </p>
            </section>
          {/*CAUSES*/}
            <section className="prevention-section">
                <h2>Major Causes of Air Pollution</h2>
                <div className="grid">
                    <div className="card">
                        <img src="/images/traffic.jps" alt="Traffic pollution" />
                        <h3>Traffic & Vehicles</h3>
                        <p>Cars and diesel engines emit NO₂ adn PM2.5 , especially in cities.</p>
                    </div>
                    <div className="card">
                        <img src="/images/industry.jpg" alt="Industrial Pollution" />
                        <h3>Industry & Factory pollution</h3>
                        <p>
                            Power plants and factories release toxic gases and fine particles that affect the air quality significantly.
                        </p>
                    </div>
                    <div className="card">
                        <img src="/images/heating.jpg" alt="Heating pollution" />
                        <h3>Coal & Wood Heating</h3>
                        <p>
                            Burning solid fuels in winter is a major cause of smog in Bosnia.
                        </p>
                    </div>
                </div>
            </section>

            {/*PROTECTION*/}
            <section className="prevention-section">
                <h2>How to Protect Yourself</h2>
                <div className="grid">
                    <div className="card">
                        <h3>📉 Track AQI Daily </h3>
                        <p>
                            Avoid outdoor activites when AQI is unhealthy.
                        </p>
                    </div>
                    <div className="card">
                        <h3>😷 Wear Masks</h3>
                        <p>
                            Use N95/FFP2 masks during high pollution days.
                        </p>
                    </div>
                    <div className="card">
                        <h3>🏠 Stay Indoors</h3>
                        <p>
                            Keep windows closed and air purifiers if possible.
                        </p>
                    </div>
                </div>
            </section>
            {/* ACTION */}
            <section className="prevention-cta">
                <h2>What Can We Do Together?</h2>
                <p>
                    Change starts with araweness. Share data. Support clean energy.
                    Demand better policies.
                </p>
            </section>
        </div>
    )
}