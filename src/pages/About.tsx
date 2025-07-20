import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>关于我们</h1>
        <p>这是一个使用现代技术栈构建的 React 应用程序。</p>
        
        <section className="tech-stack">
          <h2>技术栈</h2>
          <ul>
            <li>React 18 - 用户界面库</li>
            <li>TypeScript - 类型安全的 JavaScript</li>
            <li>Vite - 快速的构建工具</li>
            <li>React Router - 客户端路由</li>
            <li>CSS3 - 样式设计</li>
          </ul>
        </section>

        <section className="features">
          <h2>项目特性</h2>
          <ul>
            <li>⚡ 热模块替换 (HMR)</li>
            <li>🔧 TypeScript 支持</li>
            <li>📱 响应式设计</li>
            <li>🎨 现代化 UI</li>
            <li>🚀 快速构建</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About 