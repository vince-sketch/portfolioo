import { useState } from 'react'
import heroImage from './assets/vinceako.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [activeFilter, setActiveFilter] = useState('Front End Development')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    aboutProject: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [showHireThanks, setShowHireThanks] = useState(false)

  const handleHireMeClick = () => {
    setActiveSection('contact')
    setTimeout(() => {
      const fullNameInput = document.getElementById('fullName')
      if (fullNameInput) fullNameInput.focus()
    }, 0)
    setShowHireThanks(true)
    setTimeout(() => setShowHireThanks(false), 3500)
  }

  const projects = [
    {
      title: "Give The Project A Title.",
      image: "/project1.jpg", 
      liveUrl: "#"
    }
  ]

  const filters = [
    "Front End Development",
    "Back End Development",
    "JavaScript",
    "React",
    "Next.Js",
    "Tailwind Css",
    "Laravel"
  ]

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const endpoint = 'https://formsubmit.co/ajax/YOUR_EMAIL_HERE'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          message: formData.aboutProject
        })
      })

      if (!response.ok) throw new Error('Network response was not ok')

      setSubmitStatus('success')
      setFormData({ fullName: '', email: '', aboutProject: '' })
    } catch (err) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <section className="hero-section">
            <div className="hero-content">
              <div className="hello-badge">
                <span className="wave-icon">👋</span>
                HELLO I'M
              </div>
              <h1 className="hero-name">
                Vince Collin<br />
                Panes
                <span className="title-badge">Networking Engineer</span>
              </h1>
              <p className="hero-description">
              Networking refers to the practice of connecting computers, servers, and other devices to share resources, exchange data, and communicate efficiently.
              </p>
              <div className="hero-buttons">
                <button className="hire-btn" onClick={handleHireMeClick}>Hire Me Now</button>
                <button className="whatsapp-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Whatsapp
                </button>
              </div>
              <div className="social-links">
                <a href="https://web.facebook.com/vincecollinelchico.panes" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/vnc_clln/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Vince Collin Panes - Networking Engineer" />
            </div>
          </section>
        );
      case 'about':
        return (
          <section className="about-section">
            <h2 className="section-title">ABOUT ME</h2>
            <h3 className="about-subtitle">Why Do You Hire Me For Your Next Networking Engineer Project?</h3>
            <div className="about-content">
              <p>
              I'm a passionate and dedicated IT student with hands-on experience in networking.
              </p>
              <p>
              I've worked with various networking concepts such as IP addressing, subnetting, routing, switching, and network troubleshooting.
              </p>
              <p>
              I'm familiar with configuring Cisco devices and have experience using tools like Wireshark and Packet Tracer to simulate and analyze network environments.
              </p>
              <div className="about-buttons">
                <button className="hire-btn" onClick={handleHireMeClick}>Hire Me Now</button>
                <button className="whatsapp-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Whatsapp
                </button>
              </div>
            </div>
          </section>
        );
      case 'services':
        return (
          <section className="services-section">
            <h2 className="section-title">MY SERVICES</h2>
            <div className="services-grid">
              <div className="service-item">DHCP</div>
              <div className="service-item">DNS</div>
              <div className="service-item">File Sharing Service</div>
              <div className="service-item">Email Services</div>
              <div className="service-item">Network Security Services</div>
              
              
            </div>
          </section>
        );
      case 'work':
        return (
          <section className="work-section">
            <h2 className="section-title">My Work</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <img src="/dynamic.png" alt="Network Topology Design" />
                  <div className="project-overlay">
                    <h3>Network Topology Design</h3>
                    <p className="project-description">
                      Complex network infrastructure design using Cisco Packet Tracer. Features VLAN configuration, routing protocols, and secure network architecture.
                    </p>
                    <a href="/dynamic.png" target="_blank" rel="noopener noreferrer" className="live-preview-btn">
                      View Design
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image">
                  <img src="/vlan.png" alt="Network Topology Design 2" />
                  <div className="project-overlay">
                    <h3>Network Topology Design 2</h3>
                    <p className="project-description">
                      Advanced network topology featuring router-to-router communication, multiple switches, and PC endpoints. Implemented with Cisco Packet Tracer for optimal network performance.
                    </p>
                    <a href="/vlan.png" target="_blank" rel="noopener noreferrer" className="live-preview-btn">
                      View Design
                    </a>
                  </div>
                </div>
              
                </div>
            
            </div>
          </section>
        );
      case 'contact':
  return (
          <section className="contact-section">
            <h2 className="section-title">GET IN TOUCH</h2>
            <p className="contact-subtitle">
              If You Have Any Question, Of Feedback, Please Use The Form Below.
            </p>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name*</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="•••••"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="•••••"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="aboutProject">About Project*</label>
                <textarea
                  id="aboutProject"
                  name="aboutProject"
                  value={formData.aboutProject}
                  onChange={handleInputChange}
                  required
                  rows="6"
                />
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting} aria-busy={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Submit'}
              </button>
            </form>
            {submitStatus === 'success' && (
              <p style={{ marginTop: '1rem', color: 'var(--primary-color)' }}>
                Thanks! Your message has been sent.
              </p>
            )}
            {submitStatus === 'error' && (
              <p style={{ marginTop: '1rem', color: 'tomato' }}>
                Sorry, something went wrong. Please try again.
              </p>
            )}
            <div className="social-links-contact">
              <a href="https://www.instagram.com/vnc_clln/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://web.facebook.com/vincecollinelchico.panes" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                </svg>
              </a>
            </div>
          </section>
        );
      default:
        return null;
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo" onClick={() => setActiveSection('home')} style={{ cursor: 'pointer' }}>
          Vince
        </div>
        <nav className="navbar">
          <button 
            onClick={() => setActiveSection('home')}
            className={activeSection === 'home' ? 'active' : ''}
          >
            HOME
          </button>
          <button 
            onClick={() => setActiveSection('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            ABOUT
          </button>
          <button 
            onClick={() => setActiveSection('services')}
            className={activeSection === 'services' ? 'active' : ''}
          >
            SERVICES
          </button>
          <button 
            onClick={() => setActiveSection('work')}
            className={activeSection === 'work' ? 'active' : ''}
          >
            MY WORK
          </button>
          <button 
            onClick={() => setActiveSection('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            CONTACT
        </button>
        </nav>
        <div className="header-buttons">
          <button className="hire-btn" onClick={handleHireMeClick}>Hire Me Now</button>
        </div>
      </header>

      <main className="main-content">
        {renderSection()}
      </main>
      {showHireThanks && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            left: '50%',
            bottom: '24px',
            transform: 'translateX(-50%)',
            background: 'var(--primary-color)',
            color: 'var(--text-color)',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
            zIndex: 1000,
            fontWeight: 500
          }}
        >
          Thanks for hiring me! I’ll get back to you shortly.
        </div>
      )}
      </div>
  )
}

export default App
