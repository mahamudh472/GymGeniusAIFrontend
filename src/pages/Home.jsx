import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">
              Elevate Your Fitness with <span className="gradient-text">AI Intelligence</span>
            </h1>
            <p className="hero-subtitle">
              GymGenius AI is your personal workout companion that adapts to your goals, tracks your progress, and provides real-time coaching like a pro.
            </p>
            <div className="hero-btns">
              <button className="btn-primary">Download App</button>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">10k+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">500+</span>
                <span className="stat-label">Workouts</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">4.9/5</span>
                <span className="stat-label">App Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-image-container animate-fade-in">
            <div className="image-blob"></div>
            <img src="/assets/hero.png" alt="Gym Hero" className="hero-img" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose <span className="gradient-text">GymGenius AI</span>?</h2>
            <p className="section-subtitle">Experience the future of fitness with our cutting-edge features.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI Personal Coach</h3>
              <p>Get personalized workout plans that evolve based on your performance and goals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Smart Tracking</h3>
              <p>Track every rep, set, and calorie with precision. Visualize your progress over time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🥗</div>
              <h3>Nutrition Guidance</h3>
              <p>Personalized meal plans and macro tracking to fuel your workouts effectively.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-time Insights</h3>
              <p>Receive instant feedback during your workouts to optimize form and intensity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="section showcase-section">
        <div className="container showcase-grid">
          <div className="showcase-image animate-fade-in">
            <img src="/assets/mockup.png" alt="App Mockup" className="mockup-img" />
          </div>
          <div className="showcase-content animate-fade-in">
            <h2 className="showcase-title">A Premium Experience <br/>In Your <span className="gradient-text">Pocket</span></h2>
            <p className="showcase-text">
              Our mobile app is designed for athletes who demand the best. Beautiful, intuitive, and packed with powerful features to help you reach your peak performance.
            </p>
            <ul className="showcase-list">
              <li>Customized Daily Workouts</li>
              <li>Interactive AI Coaching Chat</li>
              <li>Advanced Performance Analytics</li>
              <li>Community Challenges & Badges</li>
            </ul>
            <button className="btn-primary">Start Your Journey</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Transform Your <span className="gradient-text">Body</span>?</h2>
              <p>Join thousands of users who have already reached their fitness goals with GymGenius AI.</p>
              <div className="cta-btns">
                <button className="btn-primary">App Store</button>
                <button className="btn-primary">Google Play</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
