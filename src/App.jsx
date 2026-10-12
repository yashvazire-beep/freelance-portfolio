const projects = [
  { number: "01", type: "WEB DEVELOPMENT", title: "Core Fitness", description: "A fitness business website showcasing services and an online presence.", style: "fitness", link: "https://core-fitness-z8os.vercel.app/", button: "View Live Website" },
  { number: "02", type: "SOCIAL MEDIA DESIGN", title: "The Daily Brew Café", description: "Five sample café promotional designs for coffee, food and café atmosphere.", style: "cafe", link: "", button: "Sample Project" },
];

function App() {
  return <>
    <header className="navbar">
      <a className="logo" href="#home" aria-label="Back to home">YV<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#pricing">Pricing</a></nav>
      <a className="nav-contact" href="#contact">Let's Talk ↗</a>
    </header>
    <main>
      <section className="hero section" id="home">
        <div className="hero-copy">
          <div className="availability"><span /> AVAILABLE FOR PROJECTS</div>
          <p className="eyebrow">WEB DEVELOPER & DIGITAL DESIGNER</p>
          <h1>I help small businesses <span>stand out online.</span></h1>
          <p className="hero-description">I create modern websites and eye-catching social media designs to help businesses build their online presence.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explore My Work ↘</a><a className="button secondary" href="#contact">Contact Me</a></div>
          <p className="hero-note">Based in Nagpur, India · Working with businesses online</p>
        </div>
        <div className="hero-art" aria-label="Portfolio highlights">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="art-card art-main"><span className="art-label">DIGITAL EXPERIENCES</span><div className="art-shape">YV</div><h2>Ideas into reality.</h2><p>Websites · Design · Creativity</p></div>
          <div className="art-card art-small"><span>✳</span><strong>Creative</strong><small>Design studio</small></div>
          <div className="art-tag">DESIGN / BUILD / GROW</div>
        </div>
      </section>
      <section className="trust-strip"><span>RESPONSIVE WEBSITES</span><span>✳</span><span>SOCIAL MEDIA DESIGN</span><span>✳</span><span>SMALL BUSINESS SUPPORT</span></section>
      <section className="section" id="work">
        <div className="section-heading"><div><p className="eyebrow">SELECTED PROJECTS</p><h2>Work I'm building.</h2></div><p className="muted">A growing collection of website and design projects.</p></div>
        <div className="project-grid">
          {projects.map(project => <article className="project-card" key={project.number}>
            <div className={`project-preview ${project.style}`}><span className="project-number">{project.number}</span>
              {project.style === "fitness" ? <div className="preview-fitness"><span>CORE</span><strong>FITNESS</strong><small>STRENGTH · FOCUS · PROGRESS</small></div> : <div className="preview-cafe"><span>THE DAILY BREW</span><strong>A little cup<br />of happiness.</strong><small>CAFÉ SOCIAL DESIGN CONCEPT</small></div>}
            </div>
            <div className="project-info"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p>{project.link ? <a href={project.link} target="_blank" rel="noreferrer">{project.button} ↗</a> : <a href="#contact">Ask to see the samples ↗</a>}</div>
          </article>)}
        </div>
        <p className="portfolio-disclaimer">The Daily Brew Café is a fictional concept created for portfolio practice. Its designs are sample work, not a paid client project.</p>
      </section>
      <section className="services section" id="services">
        <div className="section-heading"><div><p className="eyebrow">WHAT I CAN DO</p><h2>Simple services.<br />Thoughtful execution.</h2></div></div>
        <div className="service-grid">
          <article className="service-card"><span className="service-icon">↗</span><h3>Website Development</h3><p>Responsive landing pages, small business websites and simple website improvements.</p><span className="service-price">Starting at ₹2,500</span></article>
          <article className="service-card"><span className="service-icon">✳</span><h3>Social Media Design</h3><p>Custom Canva posts for cafés, gyms, shops and other small businesses.</p><span className="service-price">Starting at ₹499</span></article>
        </div>
        <p className="portfolio-disclaimer">Final pricing depends on scope. Domain, hosting upgrades, paid assets and additional revisions are quoted separately.</p>
      </section>
      <section className="section pricing" id="pricing">
        <p className="eyebrow">START SMALL</p><h2>Clear starting prices.</h2>
        <div className="price-grid">
          <article className="price-card"><p>DESIGN PACKAGE</p><h3>₹499</h3><span>5 social media posts</span><ul><li>Custom designs</li><li>Captions and hashtags</li><li>One small revision round</li></ul><a href="#contact">Discuss this package ↗</a></article>
          <article className="price-card featured"><p>WEBSITE PACKAGE</p><h3>₹2,500+</h3><span>Small business landing page</span><ul><li>Responsive page layout</li><li>Business information</li><li>Contact section</li></ul><a href="#contact">Discuss this package ↗</a></article>
        </div>
      </section>
      <section className="contact-section section" id="contact">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let's build something<br />useful together.</h2>
        <p>Tell me about your business and what you'd like to improve. I'll discuss the scope and price before starting.</p>
`<a className="button primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=yashvazire2005@gmail.com" target="_blank" rel="noopener noreferrer">Email Me</a>`      </section>
    </main>
    <footer><a className="logo" href="#home">YV<span>.</span></a><p>Built with care · Nagpur, India</p><a href="#home">Back to top ↑</a></footer>
  </>;
}
export default App;
