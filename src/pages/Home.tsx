import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>欢迎来到 Reactor Web 项目</h1>
        <p>这是一个现代化的 React 应用程序，使用 TypeScript 和 Vite 构建</p>
        <div className="features">
          <div className="feature">
            <h3>⚡ 快速开发</h3>
            <p>使用 Vite 进行快速的开发和构建</p>
          </div>
          <div className="feature">
            <h3>🔧 TypeScript</h3>
            <p>完整的 TypeScript 支持，提供更好的开发体验</p>
          </div>
          <div className="feature">
            <h3>🎨 现代化 UI</h3>
            <p>响应式设计，支持各种设备</p>
          </div>
        </div>
        
        <div className="cta-section">
          <Link to="/" className="cta-button">
            返回 Manager Part
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home 