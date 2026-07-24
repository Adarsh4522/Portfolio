import { useState, useEffect } from 'react';

const ROLES = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'Cloud Enthusiast',
  'Open Source Builder',
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true" />
            Available for opportunities
          </div>

          <p className="hero-greeting">Hello, world! I&apos;m</p>

          <h1 className="hero-name">
            <span className="first">Adarsh</span>
          </h1>

          <div className="hero-role-row">
            <span className="role-prefix">—</span>
            <span className="typing-text" aria-live="polite" aria-label={`Role: ${ROLES[roleIdx]}`}>
              {displayed}
            </span>
          </div>

          <p className="hero-bio">
            Hi, I&apos;m Adarsh — a developer driven by curiosity and creativity.
            I build web applications, explore cloud technologies, and aim to create
            meaningful digital experiences.
          </p>

          <div className="hero-actions">
            <a
              id="hero-view-work"
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <span>View My Work</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a
              id="hero-contact"
              href="#contact"
              className="btn btn-outline"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Contact Me
            </a>
          </div>

          <div className="hero-stats" aria-label="Quick stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Production Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Curiosity</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Code card wrapped in card-frame so badges are always in-bounds */}
        <div className="hero-visual" aria-hidden="true">
          <div className="card-frame">
            {/* Floating badges — positoned relative to card-frame */}
            <span className="tech-float tf-react">
              <span className="tech-float-icon">⚛️</span> React.js
            </span>
            <span className="tech-float tf-mongo">
              <span className="tech-float-icon">🍃</span> MongoDB
            </span>
            <span className="tech-float tf-docker">
              <span className="tech-float-icon">🐳</span> Docker
            </span>

            <div className="hero-code-card">
              <div className="code-header">
                <span className="code-dot red" />
                <span className="code-dot yellow" />
                <span className="code-dot green" />
                <span className="code-filename">about.me.js</span>
              </div>

              <div className="code-line"><span className="ln">1</span><span className="comment">// Developer Profile</span></div>
              <div className="code-line"><span className="ln">2</span><span className="kw">const </span><span className="fn">adarsh</span><span className="punc"> = &#123;</span></div>
              <div className="code-line indent1"><span className="ln">3</span><span className="prop">name</span><span className="punc">: </span><span className="str">&quot;Adarsh&quot;</span><span className="punc">,</span></div>
              <div className="code-line indent1"><span className="ln">4</span><span className="prop">role</span><span className="punc">: </span><span className="str">&quot;Full Stack Dev&quot;</span><span className="punc">,</span></div>
              <div className="code-line indent1"><span className="ln">5</span><span className="prop">stack</span><span className="punc">: [</span></div>
              <div className="code-line indent2"><span className="ln">6</span><span className="str">&quot;React&quot;</span><span className="punc">, </span><span className="str">&quot;Node.js&quot;</span><span className="punc">,</span></div>
              <div className="code-line indent2"><span className="ln">7</span><span className="str">&quot;MongoDB&quot;</span><span className="punc">, </span><span className="str">&quot;Docker&quot;</span></div>
              <div className="code-line indent1"><span className="ln">8</span><span className="punc">],</span></div>
              <div className="code-line indent1"><span className="ln">9</span><span className="prop">cloud</span><span className="punc">: </span><span className="str">&quot;GCP&quot;</span><span className="punc">,</span></div>
              <div className="code-line indent1"><span className="ln">10</span><span className="prop">openToWork</span><span className="punc">: </span><span className="val-bool">true</span><span className="punc">,</span></div>
              <div className="code-line indent1"><span className="ln">11</span><span className="prop">passion</span><span className="punc">: </span><span className="str">&quot;Building things&quot;</span></div>
              <div className="code-line"><span className="ln">12</span><span className="punc">&#125;;</span></div>
              <div className="code-line"><span className="ln">13</span>&nbsp;</div>
              <div className="code-line"><span className="ln">14</span><span className="fn">console</span><span className="punc">.</span><span className="fn">log</span><span className="punc">(</span><span className="str">&quot;Welcome! 👋&quot;</span><span className="punc">);</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
