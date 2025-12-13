import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AQIMap from './components/AQIMap.jsx'
import './App.css'

function App() {
  return (
    <div id="app" style={{height: '100vh', width: '100vw'}}>
      <AQIMap />
    </div>
  );
}

export default App
