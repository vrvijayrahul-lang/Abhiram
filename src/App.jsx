import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X, Github, Linkedin, Instagram, Mail, MoveUpRight } from 'lucide-react';

const services = ['WEB DEVELOPMENT', 'UI / UX DESIGN', 'CREATIVE DIRECTION', 'RESPONSIVE DESIGN', 'DIGITAL EXPERIENCES'];
const skills = [
  { name: 'Frontend development', detail: 'React · JavaScript · HTML · CSS', level: '01' },
  { name: 'Web design', detail: 'UI layouts · Responsive design · Prototyping', level: '02' },
  { name: 'Creative thinking', detail: 'Visual storytelling · Problem solving', level: '03' },
  { name: 'Communication', detail: 'Collaboration · Presentations · Teamwork', level: '04' },
];
// Edit these project objects to add your own work and links.
const projects = [
  { no: '01', name: 'Digital Experience', type: 'WEB DESIGN / DEVELOPMENT', year: '2026', color: 'sand', description: 'A polished, responsive website concept focused on clarity and confident visual design.', link: '#' },
  { no: '02', name: 'Creative Commerce', type: 'E-COMMERCE / UI DESIGN', year: '2026', color: 'olive', description: 'A product-first shopping experience with a clean layout and simple navigation.', link: '#' },
  { no: '03', name: 'Studio Identity', type: 'BRANDING / LANDING PAGE', year: '2025', color: 'clay', description: 'A bold digital home for a creative brand, built around a distinctive visual system.', link: '#' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return <div className="site-shell">
    <header className="topbar">
      <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">J.</span><span>ABHIRAM</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {['About','Skills','Projects','Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>LET'S TALK <ArrowUpRight size={14}/></a>
      </nav>
    </header>

    <main>
      <section className="hero frame" id="home">
        <div className="service-ticker" aria-label="Services">{[...services, ...services].map((s, i) => <React.Fragment key={`${s}-${i}`}><span>{s}</span><i>✳</i></React.Fragment>)}</div>
        <div className="hero-meta"><div><p className="eyebrow">PORTFOLIO / 2026</p><h1 className="hero-name">J. ABHIRAM</h1><p className="hero-role">Web Developer &amp; Creative Designer</p></div><p className="hero-note">Thoughtful digital experiences.<br/>Designed with purpose.</p></div>
        <div className="hero-word" aria-hidden="true">CREATIVE</div>
        <div className="portrait-wrap">
          {/* Replace public/profile.jpg with your own portrait photo. */}
          <img className="portrait" src="/profile.jpg" alt="Portrait of J. Abhiram" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }} />
          <div className="portrait-placeholder"><div className="placeholder-orbit"><span>JA</span></div><p>YOUR PORTRAIT<br/><small>Add your photo as <code>public/profile.jpg</code></small></p></div>
          <div className="portrait-caption"><span>DESIGN-MINDED.</span><span>DETAIL-DRIVEN.</span></div>
        </div>
        <div className="hero-bottom"><div className="social-links"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={12}/></a><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={12}/></a><a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={15}/> Instagram <ArrowUpRight size={12}/></a></div><a className="scroll-link" href="#about">SCROLL TO EXPLORE <ArrowDownRight size={15}/></a></div>
      </section>

      <section className="intro section-pad" id="about"><div className="section-label"><span>01 / ABOUT</span><span>A LITTLE ABOUT ME</span></div><div className="intro-grid"><h2>I turn ideas into <em>useful</em> digital experiences.</h2><div className="intro-copy"><p className="lead">Hey, I’m Abhiram — a web developer and creative designer who enjoys bringing thoughtful ideas to life on the web.</p><p>I care about the details: how a page feels, how clearly it communicates, and how naturally it works across devices. I combine design sensibility with practical development to create digital experiences that feel considered and easy to use.</p><a href="#contact" className="text-link">HAVE A PROJECT IN MIND? <ArrowUpRight size={15}/></a></div></div></section>

      <section className="skills section-pad" id="skills"><div className="section-label"><span>02 / CAPABILITIES</span><span>WHAT I BRING</span></div><div className="skills-heading"><h2>Good work starts<br/>with <em>good thinking.</em></h2><p>A growing toolkit, a curious mindset, and a focus on making every detail count.</p></div><div className="skill-list">{skills.map((skill) => <div className="skill-row" key={skill.level}><span className="skill-no">{skill.level}</span><div><h3>{skill.name}</h3><p>{skill.detail}</p></div><ArrowUpRight className="skill-arrow" size={19}/></div>)}</section>

      <section className="projects section-pad" id="projects"><div className="section-label"><span>03 / SELECTED WORK</span><span>CONCEPTS &amp; PROJECTS</span></div><div className="projects-heading"><h2>Made with intent.<br/><em>Built to connect.</em></h2><p>Some selected work and editable project placeholders. Replace these with your real projects, screenshots, and live links.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.no}><a className={`project-art ${project.color}`} href={project.link} aria-label={`Open ${project.name}`}><span className="art-number">PROJECT / {project.no}</span><div className="art-shape"><span>{project.no}</span></div><span className="art-word">{project.no === '01' ? 'FORM' : project.no === '02' ? 'OBJECT' : 'STUDIO'}</span><span className="art-open"><ArrowUpRight size={20}/></span></a><div className="project-info"><div><p className="eyebrow">{project.type}</p><h3>{project.name}</h3></div><span className="project-year">{project.year}</span></div><p className="project-description">{project.description}</p></article>)}</div></section>

      <section className="contact section-pad" id="contact"><div className="section-label"><span>04 / CONTACT</span><span>LET'S MAKE SOMETHING GOOD</span></div><div className="contact-grid"><div className="contact-copy"><h2>Have an idea?<br/>Let’s make it <em>real.</em></h2><p>Have a project, collaboration, or opportunity in mind? Send me a message and let’s start a conversation.</p><a className="email-link" href="mailto:hello@example.com"><Mail size={17}/> hello@example.com <ArrowUpRight size={15}/></a><p className="edit-hint">Replace this email with your preferred contact address.</p></div><form className="contact-form" onSubmit={handleSubmit}><label>Your name<input required value={form.name} onChange={(e) => setForm({...form, name:e.target.value})} placeholder="Name" /></label><label>Email address<input required type="email" value={form.email} onChange={(e) => setForm({...form, email:e.target.value})} placeholder="you@example.com" /></label><label>Tell me about your project<textarea required rows="4" value={form.message} onChange={(e) => setForm({...form, message:e.target.value})} placeholder="A little about what you have in mind..." /></label><button type="submit" className="submit-button">{sent ? 'MESSAGE READY' : 'PREPARE MESSAGE'} <MoveUpRight size={16}/></button>{sent && <p className="form-note" role="status">Demo form only: connect an email service or backend to send this message. Your entries are not sent anywhere.</p>}</form></div></section>
    </main>
    <footer className="footer"><a href="#home" className="brand"><span className="brand-mark">J.</span><span>ABHIRAM</span></a><p>DESIGNED WITH INTENTION © 2026</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}

export default App;
