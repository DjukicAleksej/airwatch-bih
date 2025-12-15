import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AQIMap from './components/AQIMap.jsx'
import './App.css'

function App() {
  return (
    <div id="app" style={{height: '100vh', width: '100vw'}}>
      <Navbar />
      <Hero />
      <main id="map">
      <AQIMap />
      </main>
      <Footer />
    </div>
  );
}

export default App
