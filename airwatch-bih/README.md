# 🌍 Air Quality Map – Bosnia & Herzegovina

A modern, interactive web application that displays **real-time air quality data across Bosnia and Herzegovina**, using official monitoring stations from the **World Air Quality Index (WAQI)** platform.

Built as a **Hack Club project**, with focus on clean UI, accurate data, and public awareness about air pollution.

---

## ✨ Features

- 🗺️ Interactive map of Bosnia & Herzegovina
- 📍 City markers linked to real WAQI monitoring stations
- 📊 Live AQI data (PM2.5, PM10, O₃, dominant pollutant)
- 🌫️ WAQI AQI heatmap overlay (US EPA standard)
- 🧠 Prevention page (causes, prevention & health tips)
- 💎 Modern UI (glassmorphism, blur, animations)
- ⚡ Fast & lightweight (React + Vite)

---

## 🧪 Tech Stack

- React
- Vite
- React Leaflet
- Leaflet.js
- WAQI API
- CSS (custom, modern styling)

---

## 🌐 Data Source

All air quality data is provided by the  
**World Air Quality Index (WAQI) Project**:

- https://aqicn.org
- Real monitoring stations
- US EPA AQI standard

---

## 🗺️ Covered Cities (Examples)

- Sarajevo  
- Banja Luka  
- Tuzla  
- Mostar  
- Zenica  
- Bihać  
- Trebinje  
- Doboj  
- Brčko  
- Prijedor  

Each city is mapped to a **specific WAQI station ID** for accuracy.

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/DjukicAleksej/air-quality-map-bih.git
cd air-quality-map-bih

2️⃣ Install dependencies

npm install

3️⃣ Add environment variable

Create a .env file in the root:

VITE_WAQI_TOKEN=your_waqi_api_token_here

Get a token from: https://aqicn.org/data-platform/token/
4️⃣ Run the project

npm run dev

📁 Project Structure

src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ Hero.jsx
 │   ├─ Footer.jsx
 │   ├─ AQIMap.jsx
 │   └─ AQIWidget.jsx
 │
 ├─ pages/
 │   ├─ Prevention.jsx
 │   └─ Prevention.css
 │
 ├─ App.jsx
 ├─ App.css
 └─ main.jsx

🧠 Motivation

Air pollution is a serious issue in Bosnia & Herzegovina.
This project aims to make air quality data:

    Easy to understand

    Visually clear

    Publicly accessible

🧑‍💻 Author

Djukic Aleksej
High school student • Programmer • Hack Club member

Built as a project for Hack Club.
📜 License

Open-source, free to use for educational purposes.
⭐ Acknowledgements

    World Air Quality Index Project (WAQI)

    OpenStreetMap contributors

    Hack Club community