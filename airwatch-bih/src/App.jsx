import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AQIMap from './components/AQIMap.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Prevention from "./pages/Prevention.jsx"
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div id="app" style={{height: '100vh', width: '100vw'}}>
      <Navbar />
      <Routes>
        <Route
        path="/"
        element={
          <>
          <Hero />
          <section className="map-section">
            <AQIMap />
          </section>
          </>
        }
        />
        <Route path="/prevention" element={<Prevention />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App
