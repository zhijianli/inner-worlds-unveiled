import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ManagerPart from './pages/ManagerPart'
import Map from './pages/Map'
import Sanctuary from './pages/Sanctuary'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Map />} />
            <Route path="/sanctuary" element={<Sanctuary />} />
            <Route path="/manager-part" element={<ManagerPart />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 