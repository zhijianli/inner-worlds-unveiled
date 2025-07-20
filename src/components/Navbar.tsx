import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar: React.FC = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Reactor Web
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Manager Part
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/home" 
              className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}
            >
              首页
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              关于
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 