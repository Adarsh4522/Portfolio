// SVG icons
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const PROJECTS = [
  {
    id: 'litwise',
    icon: '📚',
    title: 'LitWise — AI-Powered Literature Analysis Platform',
    subtitle: 'Full Stack · AI · Production Deployed',
    desc: 'LitWise is a full-stack AI web application that helps users understand literary works through intelligent analysis. It generates summaries, themes, and character insights while providing an interactive chatbot for deeper discussion — deployed live with a custom domain and HTTPS.',
    highlights: [
      'AI-generated book summaries, theme & character analysis',
      'Interactive AI chatbot powered by LLaMA 3.3 via Groq Cloud',
      'Fast inference with near-instant AI response times',
      'Production deployment on GCP VM with custom domain & SSL (HTTPS)',
      'Dockerized with Nginx Proxy Manager for professional-grade routing',
    ],
    stack: ['Node.js', 'Express.js', 'Groq Cloud', 'LLaMA 3.3', 'Docker', 'GCP', 'Nginx', 'HTML/CSS/JS'],
    github: 'https://github.com/Adarsh4522/AI_literature_Tutor',
    live: null,
  },
  {
    id: 'smart-water',
    icon: '💧',
    title: 'Smart Water Conservation Platform',
    subtitle: 'MERN Stack · Analytics · Role-Based Auth',
    desc: 'A full-stack web application designed to promote efficient water usage through real-time monitoring and analytics. The platform includes JWT authentication, role-based access control, and rich data visualization to drive better conservation decisions.',
    highlights: [
      'Real-time water usage tracking and monitoring dashboard',
      'Data visualization & analytics powered by Chart.js',
      'JWT-based authentication & secure authorization',
      'Role-based access control for users and administrators',
      'Smart water-saving suggestions based on usage patterns',
    ],
    stack: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Chart.js'],
    github: 'https://github.com/Adarsh4522',
    live: null,
  },
  {
    id: 'government-subsidy',
    icon: '🏛️',
    title: 'Digital Government Subsidy & Grant Administration System',
    subtitle: 'Spring Boot · React · MySQL · Secure Workflow',
    desc: 'A full-stack government subsidy management platform designed to streamline beneficiary applications, rule-based eligibility scoring, multi-tier officer verification, milestone-based grant disbursement, and fund-utilization audits.',
    highlights: [
      'Configurable eligibility scoring across income, landholding, category, age, and disability criteria',
      'Three-tier verification workflow for field, district, and finance officers',
      'Milestone-based 40%–40%–20% disbursement workflow with simulated treasury transfers',
      'Fund utilization voucher submission, verification, and audit trail',
      'JWT role-based access control and automated compliance monitoring',
    ],
    stack: ['Java 21', 'Spring Boot', 'Spring Security', 'React 18', 'MySQL 8', 'JWT', 'Spring Data JPA', 'Vite'],
    github: 'https://github.com/Adarsh4522/Government-Digital-Subsidy-Platform',
    live: null,
  },
];

const Projects = () => (
  <section className="section" id="projects" aria-label="Projects section">
    <div className="container">
      <div className="projects-header reveal">
        <span className="section-label">What I&apos;ve Built</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 560, fontSize: '0.97rem' }}>
          Real-world projects showcasing full-stack development, AI integration,
          and production-grade cloud deployment.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map(({ id, icon, title, subtitle, desc, highlights, stack, github, live }, i) => (
          <article
            key={id}
            id={`project-${id}`}
            className="glass-card project-card reveal"
            style={{ transitionDelay: `${i * 0.15}s` }}
            aria-label={title}
          >
            <div className="project-card-top">
              <span className="project-icon" aria-hidden="true">{icon}</span>
              <div className="project-links">
                {github && (
                  <a
                    id={`project-${id}-github`}
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${title} on GitHub`}
                    title="View on GitHub"
                  >
                    <GithubIcon />
                  </a>
                )}
                {live && (
                  <a
                    id={`project-${id}-live`}
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`Live demo of ${title}`}
                    title="Live Demo"
                  >
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{title}</h3>
            <p className="project-subtitle">{subtitle}</p>
            <p className="project-desc">{desc}</p>

            <ul className="project-highlights" aria-label="Key highlights">
              {highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>

            <div className="project-stack" aria-label="Tech stack">
              {stack.map((s) => <span key={s} className="stack-badge">{s}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
