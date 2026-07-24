import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          aria-label="Go to top"
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Adarsh</span>
          <span className="logo-bracket"> /&gt;</span>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ label, id }) => (
            <button
              key={id}
              id={`nav-${id}`}
              className="nav-link"
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
          <a
            href="#contact"
            id="nav-hire-me"
            className="nav-cta"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
          >
            Hire Me
          </a>
        </div>

        <button
          id="hamburger-btn"
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
