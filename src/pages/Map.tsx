import React, { useState } from 'react'
import './Map.css'
import ManagerPart from './ManagerPart'

interface Node {
  id: string
  label: string
  x: number
  y: number
  color: string
  status: 'active' | 'inactive' | 'completed'
  dotColor?: string
}

const Map: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'sanctuary'>('map')
  const [selectedNode, setSelectedNode] = useState<string>('TS')
  const [showManagerModal, setShowManagerModal] = useState(false)
  const [showTSInfo, setShowTSInfo] = useState(false)

  const nodes: Node[] = [
    {
      id: 'SoS',
      label: 'SoS',
      x: 50,
      y: 20,
      color: '#cccccc',
      status: 'inactive',
      dotColor: '#d2691e'
    },
    {
      id: 'FoE',
      label: 'FoE',
      x: 80,
      y: 50,
      color: '#cccccc',
      status: 'inactive',
      dotColor: '#d2691e'
    },
    {
      id: 'VoF',
      label: 'VoF',
      x: 85,
      y: 15,
      color: '#cccccc',
      status: 'inactive',
      dotColor: '#d2691e'
    },
    {
      id: 'TS',
      label: 'TS',
      x: 20,
      y: 45,
      color: '#74b9ff',
      status: 'active',
      dotColor: '#00b894'
    }
  ]

  const smallDots = [
    { x: 35, y: 20, color: '#74b9ff' },
    { x: 65, y: 50, color: '#fdcb6e' },
    { x: 10, y: 80, color: '#74b9ff' }
  ]

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId)
    if (nodeId === 'TS') {
      setShowTSInfo(true)
    }
  }

  const handleMeetPerfectionist = () => {
    setShowManagerModal(true)
  }

  const handleCloseModal = () => {
    setShowManagerModal(false)
  }

  const handleCloseTSInfo = () => {
    setShowTSInfo(false)
  }

  const handleGoToSanctuary = () => {
    window.location.href = '/sanctuary'
  }

  return (
    <div className="map-page">
      <div className="map-container">
        {/* Header Section */}
        <div className="map-header">
          <div className="header-left">
            <h1 className="map-title">Inner Worlds Unveiled</h1>
            <p className="map-subtitle">Journey within to befriend your inner parts</p>
          </div>
          <div className="header-right">
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeTab === 'map' ? 'active' : ''}`}
                onClick={() => setActiveTab('map')}
              >
                <span className="tab-icon">🗺️</span>
                Map
              </button>
              <button 
                className={`tab-btn ${activeTab === 'sanctuary' ? 'active' : ''}`}
                onClick={handleGoToSanctuary}
              >
                <span className="tab-icon">🏛️</span>
                Sanctuary
              </button>
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="map-area">
          {/* Small Dots */}
          {smallDots.map((dot, index) => (
            <div
              key={`dot-${index}`}
              className="small-dot"
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                backgroundColor: dot.color
              }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`map-node ${node.status} ${selectedNode === node.id ? 'selected' : ''} ${node.id === 'TS' ? 'floating' : ''}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                backgroundColor: node.color
              }}
              onClick={() => handleNodeClick(node.id)}
            >
              <span className="node-label">{node.label}</span>
              {node.dotColor && (
                <div 
                  className="node-dot"
                  style={{ backgroundColor: node.dotColor }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="map-bottom">
          <button 
            className="meet-perfectionist-btn"
            onClick={handleMeetPerfectionist}
          >
            Meet The Perfectionist
          </button>
        </div>
      </div>

      {/* TS Info Card */}
      {showTSInfo && (
        <div className="info-card-overlay" onClick={handleCloseTSInfo}>
          <div className="info-card" onClick={(e) => e.stopPropagation()}>
            <button className="info-card-close-btn" onClick={handleCloseTSInfo}>
              ✕
            </button>
            <div className="info-card-content">
              <h3 className="info-card-title">The Shoreline</h3>
              <p className="info-card-description">
                Where Manager parts gather - your organized, protective aspects
              </p>
              <div className="info-card-buttons">
                <button className="info-btn explore-btn">
                  Explore
                </button>
                <button className="info-btn reflect-btn">
                  Reflect
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manager Part Modal */}
      {showManagerModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>
              ✕
            </button>
            <ManagerPart />
          </div>
        </div>
      )}
    </div>
  )
}

export default Map 