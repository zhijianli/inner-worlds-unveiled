import React, { useState } from 'react'
import './Sanctuary.css'

interface GardenItem {
  id: string
  name: string
  description: string
  icon: string
  energyRequired: number
  isUnlocked: boolean
}

const Sanctuary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'garden' | 'gallery' | 'altar'>('garden')
  const [currentEnergy, setCurrentEnergy] = useState(25)

  const gardenItems: GardenItem[] = [
    {
      id: 'calm-lotus',
      name: 'Calm Lotus',
      description: 'Blooms with inner peace',
      icon: '🌸',
      energyRequired: 0,
      isUnlocked: true
    },
    {
      id: 'curious-fern',
      name: 'Curious Fern',
      description: 'Grows with wonder',
      icon: '🌿',
      energyRequired: 0,
      isUnlocked: true
    },
    {
      id: 'compassion-rose',
      name: 'Compassion Rose',
      description: 'Unlocks at 40 energy',
      icon: '🌹',
      energyRequired: 40,
      isUnlocked: false
    },
    {
      id: 'courage-oak',
      name: 'Courage Oak',
      description: 'Unlocks at 60 energy',
      icon: '🌳',
      energyRequired: 60,
      isUnlocked: false
    },
    {
      id: 'clarity-crystal',
      name: 'Clarity Crystal',
      description: 'Unlocks at 80 energy',
      icon: '💎',
      energyRequired: 80,
      isUnlocked: false
    }
  ]

  const handleTabChange = (tab: 'garden' | 'gallery' | 'altar') => {
    setActiveTab(tab)
  }

  const handleGoToMap = () => {
    window.location.href = '/'
  }

  return (
    <div className="sanctuary-page">
      <div className="sanctuary-container">
        {/* Header Section */}
        <div className="sanctuary-header">
          <div className="header-content">
            <h1 className="sanctuary-title">Your Sanctuary</h1>
            <p className="sanctuary-subtitle">A sacred space for reflection and growth</p>
          </div>
          <div className="global-nav">
            <button className="nav-btn" onClick={handleGoToMap}>
              <span className="nav-icon">🗺️</span>
              Map
            </button>
            <button className="nav-btn active">
              <span className="nav-icon">🏛️</span>
              Sanctuary
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'garden' ? 'active' : ''}`}
            onClick={() => handleTabChange('garden')}
          >
            <span className="tab-icon">🌱</span>
            Self-Energy Garden
          </button>
          <button 
            className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => handleTabChange('gallery')}
          >
            <span className="tab-icon">🎨</span>
            Part Gallery
          </button>
          <button 
            className={`tab-btn ${activeTab === 'altar' ? 'active' : ''}`}
            onClick={() => handleTabChange('altar')}
          >
            <span className="tab-icon">⭐</span>
            Burden Altar
          </button>
        </div>

        {/* Main Content */}
        <div className="sanctuary-content">
          {activeTab === 'garden' && (
            <div className="garden-section">
              <h2 className="section-title">Self-Energy Garden</h2>
              <p className="section-description">
                Plants bloom as you cultivate Self-energy through compassionate connection
              </p>
              
              <div className="energy-display">
                <span className="energy-label">Current Energy:</span>
                <span className="energy-value">{currentEnergy}</span>
              </div>

              <div className="garden-grid">
                {gardenItems.map((item) => (
                  <div 
                    key={item.id}
                    className={`garden-item ${item.isUnlocked ? 'unlocked' : 'locked'}`}
                  >
                    {item.isUnlocked && (
                      <div className="unlock-indicator">●</div>
                    )}
                    <div className="item-icon">{item.icon}</div>
                    <div className="item-info">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="gallery-section">
              <h2 className="section-title">Part Gallery</h2>
              <div className="gallery-progress">
                <div className="progress-numbers">1 / 8</div>
                <div className="progress-text">Parts discovered and befriended</div>
              </div>
              <div className="gallery-icon">
                <div className="magnifying-glass">
                  <div className="glass-circle"></div>
                  <div className="glass-handle"></div>
                </div>
              </div>
              <div className="gallery-action">
                <p>Explore the Inner World map to discover and connect with your parts.</p>
              </div>
            </div>
          )}

          {activeTab === 'altar' && (
            <div className="altar-section">
              <h2 className="section-title">Burden Altar</h2>
              <p className="section-description">
                A sacred space for releasing what your parts no longer need to carry.
              </p>
              
              <div className="altar-icon">
                <div className="altar-circle">
                  <div className="star star-1">⭐</div>
                  <div className="star star-2">⭐</div>
                </div>
              </div>

              <div className="altar-tools">
                <div className="tool-card">
                  <div className="tool-icon hexagon">⬡</div>
                  <h3 className="tool-title">Mirror of Self</h3>
                  <p className="tool-description">Reflects your core essence</p>
                </div>
                <div className="tool-card">
                  <div className="tool-icon compass">🧭</div>
                  <h3 className="tool-title">Compass of Curiosity</h3>
                  <p className="tool-description">Points toward growth</p>
                </div>
                <div className="tool-card">
                  <div className="tool-icon lantern">🏮</div>
                  <h3 className="tool-title">Lantern of Compassion</h3>
                  <p className="tool-description">Lights the way for parts</p>
                </div>
                <div className="tool-card">
                  <div className="tool-icon shield">🛡️</div>
                  <h3 className="tool-title">Shield of Courage</h3>
                  <p className="tool-description">Protects inner wisdom</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sanctuary 