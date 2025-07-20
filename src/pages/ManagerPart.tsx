import React, { useState } from 'react'
import './ManagerPart.css'

const ManagerPart: React.FC = () => {
  const [trust, setTrust] = useState(35)
  const [burdenLevel, setBurdenLevel] = useState(70)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const connectionOptions = [
    {
      id: 1,
      text: "What do you need me to know?",
      method: "Curious Approach",
      trustGain: 5
    },
    {
      id: 2,
      text: "I see how hard you've been working.",
      method: "Compassionate Approach",
      trustGain: 8
    },
    {
      id: 3,
      text: "What would help you feel more at ease?",
      method: "Caring Approach",
      trustGain: 6
    }
  ]

  const handleOptionClick = (optionId: number, trustGain: number) => {
    setSelectedOption(optionId)
    setTrust(prev => Math.min(100, prev + trustGain))
  }

  const handleOfferCompassion = () => {
    setTrust(prev => Math.min(100, prev + 10))
    setBurdenLevel(prev => Math.max(0, prev - 5))
  }

  const handleListenDeeply = () => {
    setTrust(prev => Math.min(100, prev + 15))
    setBurdenLevel(prev => Math.max(0, prev - 10))
  }

  const handleGoToMap = () => {
    window.location.href = '/'
  }

  return (
    <div className="manager-part">
      <div className="manager-container">
        <h1 className="manager-title">The Perfectionist</h1>
        <h2 className="manager-subtitle">Manager Part</h2>
        
        <div className="manager-icon">
          <div className="icon-circle">
            <div className="smile-face">
              <div className="eyes">
                <div className="eye left"></div>
                <div className="eye right"></div>
              </div>
              <div className="nose"></div>
              <div className="mouth"></div>
            </div>
          </div>
        </div>

        <p className="manager-description">
          This part works tirelessly to ensure everything is done exactly right, 
          protecting you from criticism and failure.
        </p>

        <div className="status-indicators">
          <div className="indicator">
            <div className="indicator-label">Trust</div>
            <div className="progress-bar">
              <div 
                className="progress-fill trust-fill" 
                style={{ width: `${trust}%` }}
              ></div>
            </div>
            <div className="indicator-value">{trust}%</div>
          </div>

          <div className="indicator">
            <div className="indicator-label">Burden Level</div>
            <div className="progress-bar">
              <div 
                className="progress-fill burden-fill" 
                style={{ width: `${burdenLevel}%` }}
              ></div>
            </div>
            <div className="indicator-value">{burdenLevel}%</div>
          </div>
        </div>

        <div className="connection-section">
          <h2 className="connection-title">How would you like to connect?</h2>
          
          <div className="connection-options">
            {connectionOptions.map((option) => (
              <div 
                key={option.id}
                className={`connection-option ${selectedOption === option.id ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option.id, option.trustGain)}
              >
                <div className="option-text">{option.text}</div>
                <div className="option-method">
                  {option.method} • +{option.trustGain} Trust
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <button 
            className="action-btn compassion-btn"
            onClick={handleOfferCompassion}
          >
            Offer Compassion
          </button>
          <button 
            className="action-btn listen-btn"
            onClick={handleListenDeeply}
          >
            Listen Deeply
          </button>
        </div>
        

      </div>
    </div>
  )
}

export default ManagerPart 