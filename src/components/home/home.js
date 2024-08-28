import React from 'react'
import './home.css'
import neurNet from '../../neur-net.jpg'
import data from '../../data.jpg'
import consulting from '../../consulting.png'

export default function HomePage() {
  return (
    <div className='homeContainer'>
      <div className='homeTitle'>
        <div className='homeTitleInner'>
          <h1>Empowering Businesses with AI</h1>
          <h2>Cutting-edge AI models for your need</h2>
          <button id='button'>Learn More</button>
        </div>
      </div>
      <div className='homeServices'>
        <h2>Our Services</h2>
        <div className='cardServices'>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={neurNet} alt="Avatar" style={{'width':'300px', 'height':'200px'}} />
              </div>
              <div className="flip-card-back">
                <p>
                  • Tailored to your specific business needs <br />
                  • State-of-the-art algorithms and architectures <br />
                  • Scalable and adaptable solutions <br />
                  • Continuous improvement and updates
                </p>
              </div>
            </div>
            <h2>Custom AI Models</h2>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <img src={data} alt="Avatar" style={{'width':'300px', 'height':'200px'}} />
              </div>
              <div className="flip-card-back">
                <p>
                  • Advanced pattern recognition <br />
                  • Predictive analytics and forecasting <br />
                  • Big data processing and insights <br />
                  • Interactive dashboards and visualizations
                </p>
              </div>
            </div>
            <h2>Data Analysis</h2>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <img src={consulting} alt="Avatar" style={{'width':'300px', 'height':'200px'}} />
              </div>
              <div className="flip-card-back">
                <p>
                  • AI strategy development <br />
                  • Implementation roadmap <br />
                  • Technical feasibility studies <br />
                  • AI ethics and governance guidance
                </p>
              </div>
            </div>
            <h2>AI Consulting</h2>
          </div>
        </div>
      </div>
      <div className='partnersContainer'>
        <div className='partnersInner'>Partners</div>
      </div>
    </div>
  )
}